#!/bin/bash
sudo apt-get update && sudo apt-get install -y nginx
sudo apt-get install -y git && sudo apt-get update
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
source ~/.profile
nvm install 5.0