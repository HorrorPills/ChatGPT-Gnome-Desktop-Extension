# ChatGPT-Gnome-Desktop-Extension


ChatGPT Gnome Desktop Extension | Talk with ChatGPT from your menubar!

![Screenshot from 2023-01-13 16-53-54](https://user-images.githubusercontent.com/21268783/212362417-1e06b82e-8abd-400a-9659-ba25611cd3ae.png)
![Screenshot from 2023-01-13 16-57-31](https://user-images.githubusercontent.com/21268783/212363907-ce25b9d3-dda9-4586-ae66-29fc2a118831.png)

- EARLY VERSION WORK IN PROGRESS

This Gnome Desktop Extension adds ChatGPT to your desktop experience. Clickable icon in the menu bar to hide and show ChatGPT!

![Screenshot from 2023-01-13 15-10-33](https://user-images.githubusercontent.com/21268783/212339570-3b56fd40-da79-4ef0-8373-fe6eb7a91d44.png)

To-do & Info:

- Enable mouse-wheel scrolling (currently only keyboard-arow-scrolling is supported)
- Clicking within the extension window is buggy (Using keyboard navigation is recommended). This will be fixed.
- Add Gnome 43 support.

How to install:
- Make sure you have the `gnome-shell-extensions` package installed. It allows you to turn on the Extension.
- Place the `chatgpt-gnome-desktop@chat-gpt-gnome-desktop` folder in `~/.local/share/gnome-shell/extensions/`
- Restart Gnome with `Alt`+`F2` then type `r` or Log out & Log back in to Gnome.






KNOWN ISSUES AND POSSIBLE FIX:

- Possibly not fully working on Wayland. Use Xorg.
- `Requiring WebKit2, version none: Requiring namespace 'Gtk' version '4.0', but '3.0' is already loaded` can appear on Gnome 43.

On Ubuntu and Debian-based distributions, you can install the latest version of GTK 4 by running the following command in the terminal:

`sudo apt install libgtk-4-dev`

On Arch Linux and its derivatives, you can install GTK 4 by running the following command in the terminal:

`sudo pacman -S gtk4`

On Fedora, you can install GTK 4 by running the following command in the terminal:

`sudo dnf install gtk4-devel`

- Once you have GTK installed, you can then set the default version by modifying your environment variables. On Ubuntu or Debian-based systems, you can do this by adding the following line to your `.bashrc` or `.bash_profile` file:

`export GTK_VERSION=4`

You may also need to set the GDK_BACKEND environment variable.

`export GDK_BACKEND=x11`

You will need to restart your terminal or run the command source ~/.bashrc for the changes to take effect.

On other distributions, you may need to use a different package manager or set the environment variables in a different way.



