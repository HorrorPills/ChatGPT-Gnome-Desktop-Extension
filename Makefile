install:
	@printf "\e[1;34m>>>\e[0m ChatGPT Gnome Desktop Extension\n"
	@printf "\e[1;34m>>>\e[0m The following commands that will be executed to install the app:\n"
	@printf "\n"
	@printf "mkdir -p ~/.local/share/gnome-shell/extensions/\n"
	@printf "cp -r ./chatgpt-gnome-desktop@chat-gpt-gnome-desktop ~/.local/share/gnome-shell/extensions/\n"
	@printf "\n"
	@read -p ">>> Press ENTER to install the app."
	@mkdir -p ~/.local/share/gnome-shell/extensions/
	@cp -r ./chatgpt-gnome-desktop@chat-gpt-gnome-desktop ~/.local/share/gnome-shell/extensions/
	@printf "\e[1;34m>>>\e[0m The app is now installed, You may log out or press Alt+F2 to complete the install.\n"

uninstall:
	@printf "\e[1;34m>>>\e[0m ChatGPT Gnome Desktop Extension\n"
	@printf "\e[1;34m>>>\e[0m The following commands that will be executed to uninstall the app:\n"
	@printf "rm -rf ~/.local/share/gnome-shell/extensions/chatgpt-gnome-desktop@chat-gpt-gnome-desktop"
	@printf "\n"
	@read -p ">>> Press ENTER to uninstall the app."
	@rm -rf ~/.local/share/gnome-shell/extensions/chatgpt-gnome-desktop@chat-gpt-gnome-desktop
	@printf "\e[1;34m>>>\e[0m The app is now uninstalled, You may log out or press Alt+F2 to complete the install. Thanks for using the app. \n"

	
	