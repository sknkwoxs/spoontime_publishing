#!/usr/bin/env zsh

# This script is used to generate the list of files to be included in the
# https://capacitorjs.com/docs/getting-started/environment-setup

echo '[1] brew bundle'
brew update && brew doctor && brew bundle

echo '[2] node lts via nvm'
if ! node --version &>/dev/null; then
  mkdir -p ~/.nvm
  cat <<'EOT' >> ~/.zprofile
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
EOT
  source ~/.nvm/nvm.sh
  nvm install --lts && nvm use --lts
  echo node: $(node --version)
  source ~/.zprofile
fi

# gradle jdk11 이상 오류 발생.
sudo ln -sfn /opt/homebrew/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-11.jdk
echo 'export PATH="/opt/homebrew/opt/openjdk@11/bin:$PATH"' >> ~/.zshrc
# export CPPFLAGS="-I/opt/homebrew/opt/openjdk@11/include"
echo 'export ANDROID_HOME="/Users/mozo/Library/Android/sdk/"' >> ~/.zshrc
echo 'export PATH=/Users/mozo/Library/Android/sdk/tools:/Users/mozo/Library/Android/sdk/tools/bin:/Users/mozo/Library/Android/sdk/platform-tools:$PATH' >> ~/.zshrc
