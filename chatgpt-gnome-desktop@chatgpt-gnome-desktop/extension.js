import Gio from 'gi://Gio';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import St from 'gi://St';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class ChatGPTGnomeDesktopExtension extends Extension {
    constructor(metadata) {
        super(metadata);
        this.button = null;
        this.menu = null;
        this.proc = null;
        this.initialized = false;
        this.automaticallyStartNewWindowAfterRestart = false;
    }

    enable() {
        if (this.initialized) {
            log('Extension already initialized');
            return;
        }
        this.initialized = true;

        log('Initializing extension');
        this.button = new St.Bin({
            style_class: 'panel-button',
            reactive: true,
            can_focus: true,
            x_expand: true,
            y_expand: false,
            track_hover: true
        });

        log("moje path ************");
        log(this.path)
        let gicon = Gio.icon_new_for_string(this.path + "/icons/chatgpt_icon.png");
        let icon = new St.Icon({ gicon: gicon });

        this.button.set_child(icon);
        this.button.connect('button-press-event', (actor, event) => {
            log('Button pressed: ' + event.get_button());
            if (event.get_button() == 1) {
                this.toggleWindow();
            } else if (event.get_button() == 3) {
                this.toggleMenu();
            }
        });

        this.menu = new PopupMenu.PopupMenu(this.button, 0.0, St.Side.TOP, 0);
        this.menu.actor.add_style_class_name('panel-status-menu-box');
        Main.layoutManager.addChrome(this.menu.actor);
        this.menu.actor.hide();

        let menuRestart = new PopupMenu.PopupMenuItem("Restart");
        let menuQuit = new PopupMenu.PopupMenuItem("Quit");

        this.menu.addMenuItem(menuRestart);
        this.menu.addMenuItem(menuQuit);

        menuRestart.connect('activate', () => this.reloadWindow());
        menuQuit.connect('activate', () => this.killWindow());

        // Enable the extension after initialization
        log('Enabling extension');
        if (!this.button.get_parent()) {
            Main.panel._rightBox.insert_child_at_index(this.button, 0);
        }
        log('Button added to panel');

        log('Extension initialized and enabled');
    }

    disable() {
        log('Disabling extension');
        if (this.proc) {
            this.killWindow();
            this.proc = null;
        }
        if (this.button.get_parent()) {
            Main.panel._rightBox.remove_child(this.button);
        }
        if (this.menu) {
            this.menu.destroy();
        }
        log('Button removed from panel');
    }

    toggleWindow() {
        log('Toggling window');
        if (!this.proc) {
            log('Creating new subprocess');

            // Get the position of the button
            let [x, y] = this.button.get_transformed_position();
            let [width, height] = this.button.get_size();

            log(x+','+y+','+width+','+height);
            this.proc = new Gio.Subprocess({
                argv: ['gjs', this.path + '/window.js', x.toString(), (y + height).toString()]//,
                //flags: Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
            });

            this.proc.init(null);

            this.proc.wait_async(null, (proc, res) => {
                try {
                    this.proc.wait_finish(res);
                    log('Subprocess exited');
                } catch (e) {
                    log('Subprocess wait failed: ' + e.message);
                }
                this.proc = null;

                if(this.automaticallyStartNewWindowAfterRestart){
                    this.automaticallyStartNewWindowAfterRestart = false;
                    this.toggleWindow();
                }
            });

            return;
        }

        this.killWindow();
    }

    reloadWindow() {
        log('Reloading window');
        this.killWindow();
        this.automaticallyStartNewWindowAfterRestart = true;
    }

    killWindow() {
        log('Killing window');
        if (this.proc) {
            try {
                this.proc.force_exit();
            } catch (e) {
                log('Failed to kill subprocess: ' + e.message);
            }
            log('Kiled window');
        }
    }

    toggleMenu() {
        log('Toggling menu');
        if (this.menu.isOpen) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
}
