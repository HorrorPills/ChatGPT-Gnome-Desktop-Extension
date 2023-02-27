imports.gi.versions.Gtk = '3.0';
imports.gi.versions.WebKit2 = '4.1';

const Gtk = imports.gi.Gtk
const Webkit = imports.gi.WebKit2;

Gtk.init(null);

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
  webView = new Webkit.WebView();
  scrolled_window.add(webView);
  //load the URL and add it to WebView
  webView.load_uri('https://chat.openai.com/chat');

  Window.add(scrolled_window)
  Window.show_all();
    
  Gtk.main();
}

createWindow();