const St = imports.gi.St;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Webkit = imports.gi.WebKit2;
// Fix Webkit namespace load
imports.gi.versions.WebKit2 = '4.0';
const Gtk = imports.gi.Gtk;
const Gio = imports.gi.Gio;


let button;

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
    button.connect('button-press-event', _handleClick);
}

// Open GTK Window when the menubar button is clicked.
let window, webView;

function _handleClick() {
    if (!window) {
        //set window style- in this case TOPLEVEL
        window = new Gtk.Window({
            type: Gtk.WindowType.TOPLEVEL
        });
        //remove window interaction buttons
        window.decorated = false;
        //set the size of the window
        window.set_default_size(350, 550);
        //set the border radius of the window
        // !!! not yet implemented !!!       
        //make the window non resizeable
        window.resizable = false;
        //enable scrolling inside the window
        scrolled_window = new Gtk.ScrolledWindow();
        //open the website
        webView = new Webkit.WebView();
        scrolled_window.add(webView);
        //load the URL and add it to WebView
        webView.load_uri('https://chat.openai.com/chat');
        window.add(scrolled_window);
        //window positioning
        window.set_position(Gtk.WindowPosition.MOUSE);
        //skip showing in the taskbar
        window.set_skip_taskbar_hint(true);
        //open the window
        window.show_all();
        //check if the window is open, if yes, close it after clicking the menubar button
    } else if (window.get_visible()) {
        window.hide();
    } else {
        window.show_all();
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
