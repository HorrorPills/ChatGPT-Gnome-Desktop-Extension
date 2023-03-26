imports.gi.versions.Gtk = '3.0';
imports.gi.versions.WebKit2 = '4.1';

const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk
const Webkit = imports.gi.WebKit2;

Gtk.init(null);

function prepareCookieStorage() {
  const appName = 'ChatGPT-Gnome-Desktop-Extension';
  const cookieFilename = 'cookies.sqlite';

  const xdgDataHome = GLib.getenv('XDG_DATA_HOME') || GLib.build_filenamev([GLib.get_home_dir(), '.local', 'share']);
  const appDataDir = GLib.build_filenamev([xdgDataHome, appName]);

  // Create the appDataDir if it doesn't exist
  GLib.mkdir_with_parents(appDataDir, 0o700);
  return GLib.build_filenamev([appDataDir, cookieFilename]);
}

function createWindow(){
  const Window = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL
  });
  Window.set_position(Gtk.WindowPosition.MOUSE);
  Window.connect('destroy', Gtk.main_quit);
  Window.decorated = false;
  Window.set_default_size(350, 550);

  scrolled_window = new Gtk.ScrolledWindow();

  //open the website
  const cookieStorage = prepareCookieStorage();
  const webContext = Webkit.WebContext.get_default();
  const cookieManager = webContext.get_cookie_manager();
  cookieManager.set_persistent_storage(cookieStorage, Webkit.CookiePersistentStorage.SQLITE);

  webView = new Webkit.WebView({ web_context: webContext });
  scrolled_window.add(webView);

  //load the URL and add it to WebView
  webView.load_uri('https://chat.openai.com/chat');

  Window.add(scrolled_window)
  Window.show_all();
    
  Gtk.main();
}

createWindow();