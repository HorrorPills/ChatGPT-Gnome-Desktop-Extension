# ChatGPT-Gnome-Desktop-Extension


ChatGPT Gnome Desktop Extension | Talk with ChatGPT from your menubar!

![Screenshot from 2023-01-13 16-53-54](https://user-images.githubusercontent.com/21268783/212362417-1e06b82e-8abd-400a-9659-ba25611cd3ae.png)
![Screenshot from 2023-01-13 16-57-31](https://user-images.githubusercontent.com/21268783/212363907-ce25b9d3-dda9-4586-ae66-29fc2a118831.png)

- EARLY VERSION WORK IN PROGRESS

This Gnome Desktop Extension adds ChatGPT to your desktop experience. Clickable icon in the menu bar to hide and show ChatGPT!

![Screenshot from 2023-01-13 15-10-33](https://user-images.githubusercontent.com/21268783/212339570-3b56fd40-da79-4ef0-8373-fe6eb7a91d44.png)

TO-DO & INFO:

- Enable mouse-wheel scrolling (currently only keyboard-arow-scrolling is supported)
- Clicking within the extension window is buggy (Using keyboard navigation is recommended). This will be fixed.
- Cache & Cookies storing for the comfort of not having to log in each time after system/extension restart.
- Add Gnome 43 support (potentially fixed, testing)

HOW TO INSTALL:

- Make sure you have the `gnome-shell-extensions` package installed. It allows you to turn on the Extension.
- Place the `chatgpt-gnome-desktop@chat-gpt-gnome-desktop` folder in `~/.local/share/gnome-shell/extensions/`
- Restart Gnome with `Alt`+`F2` then type `r`
- Enable the extension inside the Gnome Extensions application.
- Restart Gnome with `Alt`+`F2` then type `r` or Log out & Log back in to Gnome.

KNOWN ISSUES:

- Possibly not fully working on Wayland. Use Xorg.
- `Requiring WebKit2, version none: Requiring namespace 'Gtk' version '4.0', but '3.0' is already loaded` can appear on Gnome 43.

EXTRAS:

On Ubuntu and Debian-based distributions, you can install the latest version of GTK 4 by running the following command in the terminal:

`sudo apt install libgtk-4-dev`

On Arch Linux and its derivatives, you can install GTK 4 by running the following command in the terminal:

`sudo pacman -S gtk4`

On Fedora, you can install GTK 4 by running the following command in the terminal:

`sudo dnf install gtk4-devel`



