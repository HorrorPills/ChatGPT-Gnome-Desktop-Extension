imports.gi.versions.Gtk = '3.0';
imports.gi.versions.WebKit2 = '4.1';

const St = imports.gi.St;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Gio = imports.gi.Gio;
const PopupMenu = imports.ui.popupMenu;

let button, menu, proc;
let initialized = false;

function init() {
    if (initialized) {
        log('Extension already initialized');
        return;
    }
    initialized = true;

    log('Initializing extension');
    button = new St.Bin({
        style_class: 'panel-button',
        reactive: true,
        can_focus: true,
        x_expand: true,
        y_expand: false,
        track_hover: true
    });

    let gicon = Gio.icon_new_for_string(Me.path + "/icons/chatgpt_icon.png");
    let icon = new St.Icon({ gicon });

    button.set_child(icon);
    button.connect('button-press-event', (actor, event) => {
        log('Button pressed: ' + event.get_button());
        if (event.get_button() == 1) {
            toggleWindow();
        } else if (event.get_button() == 3) {
            toggleMenu();
        }
    });

    menu = new PopupMenu.PopupMenu(button, 0.0, St.Side.TOP, 0);
    menu.actor.add_style_class_name('panel-status-menu-box');
    Main.uiGroup.add_actor(menu.actor);
    menu.actor.hide();

    let menuRestart = new PopupMenu.PopupMenuItem("Restart");
    let menuQuit = new PopupMenu.PopupMenuItem("Quit");

    menu.addMenuItem(menuRestart);
    menu.addMenuItem(menuQuit);

    menuRestart.connect('activate', reloadWindow);
    menuQuit.connect('activate', killWindow);
}

function toggleWindow() {
    log('Toggling window');
    if (!proc) {
        log('Creating new subprocess');

        // Get the position of the button
        let [x, y] = button.get_transformed_position();
        let [width, height] = button.get_size();

        proc = Gio.Subprocess.new(
            ['gjs', Me.path + '/window.js', x.toString(), (y + height).toString()],
            Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
        );

        proc.wait_async(null, (proc, res) => {
            try {
                proc.wait_finish(res);
                log('Subprocess exited');
            } catch (e) {
                log('Subprocess wait failed: ' + e.message);
            }
            proc = null;
        });

        return;
    }

    killWindow();
}

function reloadWindow() {
    log('Reloading window');
    killWindow();
    toggleWindow();
}

function killWindow() {
    log('Killing window');
    if (proc) {
        try {
            proc.force_exit();
        } catch (e) {
            log('Failed to kill subprocess: ' + e.message);
        }
        proc = null;
    }
}

function toggleMenu() {
    log('Toggling menu');
    if (menu.isOpen) {
        menu.close();
    } else {
        menu.open();
    }
}

function enable() {
    log('Enabling extension');
    if (!button.get_parent()) {
        Main.panel._rightBox.insert_child_at_index(button, 0);
    }
    log('Button added to panel');
}

function disable() {
    log('Disabling extension');
    if (proc) {
        killWindow();
    }
    if (button.get_parent()) {
        Main.panel._rightBox.remove_child(button);
    }
    if (menu) {
        menu.destroy();
    }
    log('Button removed from panel');
}

function main() {
    init();
    enable();
    log('Extension initialized and enabled');
}

main();
