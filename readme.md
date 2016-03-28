# Variant Studios Website - Jekyll site powered by CloudCannon

# Get your local environment setup on OSX

## Install Homebrew

`$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

## Install Node 0.10 (which includes npm)

`$ brew install node010`

# Setup the site

## Clone the repo

Create and move to the directory where you want to copy the site/repo:
`$ mkdir ~/VS/variantstudios/local &&  cd /VS/variantstudios/local `

Clone the repo into the local directory:
`$ git clone https://github.com/variantstudios/variantstudios.com . `

## Setup the site

### Install the Ruby Gems
`$ bundle install`

### Install the Node packages
`$ npm install`

### Install Gulp globally
`$ npm install gulp -g`

## Compile

To compile Jekyll, SASS and run a local server (with browsersync) you'll need to run `$ gulp`