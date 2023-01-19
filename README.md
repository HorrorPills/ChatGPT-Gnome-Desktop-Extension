<div align="center">
 <h1>ChatGPT Gnome Desktop Extension</h1>
 <img width="650" src="https://user-images.githubusercontent.com/119129086/213536496-c204f289-45d8-4d45-aaa9-ea72cec31143.png">
</div>

<h4><p align="center">
Gnome just became even more powerful thanks to ChatGPT now being available from the comfort of your desktop, always ready to assist. <br>Save time on finding answers on the internet, you are now 1 click away.
</p>

<h2><p align="center">
EARLY VERSION | WORK IN PROGRESS
</p>

<br>
<!-- screenshots -->
<details markdown='1'><summary align="center">SCREENSHOTS</summary><div align="center">

![Screenshot from 2023-01-13 16-53-54](https://user-images.githubusercontent.com/21268783/212362417-1e06b82e-8abd-400a-9659-ba25611cd3ae.png)
![Screenshot from 2023-01-13 16-57-31](https://user-images.githubusercontent.com/21268783/212363907-ce25b9d3-dda9-4586-ae66-29fc2a118831.png)
</div></details>
<!-- end screenshots -->

 
### TO-DO & INFO:

- Clicking & Scrolling using the mouse within the extension window is buggy (Using keyboard navigation is recommended). This will be fixed.
- Cache & Cookies storing for the comfort of not having to log in each time after system/extension restart.
- Add Gnome 43 support (potentially fixed, testing)

---

### HOW TO INSTALL/UNINSTALL:

To install the chatgpt gnome desktop ext. clone this repo, cd into the ext dir. and run `make install`
```ocaml
$ git clone https://github.com/HorrorPills/ChatGPT-Gnome-Desktop-Extension && cd ChatGPT-Gnome-Desktop-Extension && sudo make install
```

To uninstall it. run `make uninstall`
```ocaml
$ git clone https://github.com/HorrorPills/ChatGPT-Gnome-Desktop-Extension && cd ChatGPT-Gnome-Desktop-Extension && sudo make uninstall
```

---

KNOWN ISSUES:

- Possibly not fully working on Wayland. Use Xorg.
- `Requiring WebKit2, version none: Requiring namespace 'Gtk' version '4.0', but '3.0' is already loaded` can appear on Gnome 43.

---

EXTRAS:

On Ubuntu and Debian-based distributions, you can install the latest version of GTK 4 by running the following command in the terminal:

```ocaml
$ sudo apt install libgtk-4-dev
```

On Arch Linux and its derivatives, you can install GTK 4 by running the following command in the terminal:

```ocaml
$ sudo pacman -S gtk4
```

On Fedora, you can install GTK 4 by running the following command in the terminal:

```ocaml
$ sudo dnf install gtk4-devel
```


