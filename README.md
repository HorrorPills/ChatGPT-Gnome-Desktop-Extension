# ChatGPT-Gnome-Desktop-Extension

![213469202-c13e6f0e-a31d-4148-b996-d43aa5ac5014 (1)](https://user-images.githubusercontent.com/21268783/213477021-f446c43b-3bb9-4d96-aa7a-ce6bb6b45aac.png)

<h2><p align="center">
Gnome just became even more powerful thanks to ChatGPT now being available from the comfort of your desktop, always ready to assist. <br>Save time on finding answers on the internet, you are now 1 click away.
</p>

---
<h2><p align="center">
EARLY VERSION | WORK IN PROGRESS
</p>

![Screenshot from 2023-01-13 16-53-54](https://user-images.githubusercontent.com/21268783/212362417-1e06b82e-8abd-400a-9659-ba25611cd3ae.png)
![Screenshot from 2023-01-13 16-57-31](https://user-images.githubusercontent.com/21268783/212363907-ce25b9d3-dda9-4586-ae66-29fc2a118831.png)


---
 
### TO-DO & INFO:

- Clicking & Scrolling using the mouse within the extension window is buggy (Using keyboard navigation is recommended). This will be fixed.
- Cache & Cookies storing for the comfort of not having to log in each time after system/extension restart.
- Add Gnome 43 support (potentially fixed, testing)

---

### HOW TO INSTALL:

- Make sure you have the `gnome-shell-extensions` package installed. It allows you to turn on the Extension.
- Place the `chatgpt-gnome-desktop@chatgpt-gnome-desktop` folder in `~/.local/share/gnome-shell/extensions/`
- Restart Gnome with `Alt`+`F2` then type `r`
- Enable the extension inside the Gnome Extensions application.
- Restart Gnome with `Alt`+`F2` then type `r` or Log out & Log back in to Gnome.

---

KNOWN ISSUES:

- Possibly not fully working on Wayland. Use Xorg.
- `Requiring WebKit2, version none: Requiring namespace 'Gtk' version '4.0', but '3.0' is already loaded` can appear on Gnome 43.

---

EXTRAS:

On Ubuntu and Debian-based distributions, you can install the latest version of GTK 4 by running the following command in the terminal:

`sudo apt install libgtk-4-dev`

On Arch Linux and its derivatives, you can install GTK 4 by running the following command in the terminal:

`sudo pacman -S gtk4`

On Fedora, you can install GTK 4 by running the following command in the terminal:

`sudo dnf install gtk4-devel`



