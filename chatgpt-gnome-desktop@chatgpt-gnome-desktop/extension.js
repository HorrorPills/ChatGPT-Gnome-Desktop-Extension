imports.gi.versions.Gtk = '3.0';
imports.gi.versions.WebKit2 = '4.1';

const St = imports.gi.St;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Webkit = imports.gi.WebKit2;
const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;
const PopupMenu = imports.ui.popupMenu;


let button, menu
//the process that the window will open in
let proc

function init() {
    button = new St.Bin({
        style_class: 'panel-button',
        reactive: true,
        can_focus: true,
        x_expand: true,
        y_expand: false,
        track_hover: true
    });
    //set menubar icon
    let gicon = Gio.icon_new_for_string(Me.path + "/icons/chatgpt_icon.png");
    icon = new St.Icon({
        gicon
    });

    button.set_child(icon);
    button.connect('button-press-event', function(actor, event) {
        if (event.get_button() == 1) {
            toggleWindow();
        } else if (event.get_button() == 3) {
            toggleMenu();
        }
    })

    //create the menu
    menu = new PopupMenu.PopupMenu(button, 0.0, St.Side.TOP, 0);
    menu.actor.add_style_class_name('panel-status-menu-box');
    Main.uiGroup.add_actor(menu.actor);
    menu.actor.hide();

    //create menu items
    menuRestart = new PopupMenu.PopupMenuItem("Restart");
    menuQuit = new PopupMenu.PopupMenuItem("Quit");

    //add menu items to menu
    menu.addMenuItem(menuRestart);
    menu.addMenuItem(menuQuit);

    //connect menu items to functions
    menuRestart.connect('activate', function() {
        reloadWindow();
    }
    );
    menuQuit.connect('activate', function() {
      killWindow();
    });

}

function toggleWindow() {
  if(!proc){
    proc = Gio.Subprocess.new(
      ['gjs', Me.path + '/window.js'],
      Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
    );
    return;
  }
  //TODO: find a way to hide the window instead of killing it
  killWindow();
}

function reloadWindow(){
  if(!proc) return;
  proc.force_exit();
  proc = Gio.Subprocess.new(
    ['gjs', Me.path + '/window.js'],
    Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
  );
}

function killWindow(){
  if(!proc) return;
  proc.force_exit();
  proc = null;
}

function toggleMenu() {
    if (menu.isOpen) {
        menu.close();
    } else {
        menu.open();
    }
}


function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}

function main() {
    init();
    enable();
}