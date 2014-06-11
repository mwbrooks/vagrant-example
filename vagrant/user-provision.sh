#!/usr/bin/env bash

# install node.10.x
curl https://raw.githubusercontent.com/creationix/nvm/v0.7.0/install.sh | sh
source ~/.profile
nvm install v0.10.29
nvm use v0.10.29
nvm alias default v0.10.29
