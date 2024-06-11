imports.gi.versions.Gtk = '3.0';
imports.gi.versions.WebKit2 = '4.1';

const { GLib, Gtk, WebKit2, Gdk } = imports.gi;

function log(message) {
    print('window.js: ' + message);
}

function prepareCookieStorage() {
    const appName = 'ChatGPT-Gnome-Desktop-Extension';
    const cookieFilename = 'cookies.sqlite';

    const xdgDataHome = GLib.getenv('XDG_DATA_HOME') || GLib.build_filenamev([GLib.get_home_dir(), '.local', 'share']);
    const appDataDir = GLib.build_filenamev([xdgDataHome, appName]);

    log('Creating cookie storage directory: ' + appDataDir);
    GLib.mkdir_with_parents(appDataDir, 0o700);
    return GLib.build_filenamev([appDataDir, cookieFilename]);
}

function createWindow(x, y) {
    log('Creating window');
    const appWindow = new Gtk.Window({
        type: Gtk.WindowType.POPUP,
        default_width: 350,
        default_height: 550,
        title: 'ChatGPT'
    });

    appWindow.set_decorated(false);
    appWindow.set_keep_above(true);

    log(`Calculated position: x=${x}, y=${y}`);

    appWindow.move(x, y);

    const scrolledWindow = new Gtk.ScrolledWindow();
    const cookieStorage = prepareCookieStorage();
    const webContext = WebKit2.WebContext.get_default();
    const cookieManager = webContext.get_cookie_manager();
    cookieManager.set_persistent_storage(cookieStorage, WebKit2.CookiePersistentStorage.SQLITE);

    const webView = new WebKit2.WebView({ web_context: webContext });
    scrolledWindow.add(webView);
    webView.load_uri('https://chat.openai.com/chat');

    appWindow.add(scrolledWindow);
    appWindow.connect('destroy', () => Gtk.main_quit());
    appWindow.show_all();
    log('Window created and shown at calculated position');
}

Gtk.init(null);

const [, , x, y] = ARGV;
createWindow(parseInt(x), parseInt(y));
Gtk.main();
log('Script execution completed');
