# GAIG uiBootstrap Seed Project

Client template for applications using GAIG uiBootstrap

### Table of Contents
1. [Getting Started](#user-content-getting-started)
    - [Install nodejs](#user-content-install-nodejs)
    - [Install gulp](#user-content-install-gulp)
    - [Install git]($user-content-install-git)
    - [Download](#user-content-download)
1. [Install Project Dependencies](#user-content-install-project-dependencies)
1. [Start Gulp](#user-content-start-gulp)
1. [Troubleshooting](#user-content-troubleshooting)

## Getting Started

Before you begin, there are a few dependencies you must install. To install these dependencies,
you must hav administrator access on your machine.

### Install nodejs
Node allows you to run Javascript on the server. To install, navigate to
the [download](http://nodejs.org/download) page on the [nodejs website](http://nodejs.org/) and
download and run the appropriate installer. Node comes bundled with the Node Package Manager (NPM),
which is also a dependency of the uiBootstrap seed project.

To confirm the installation was successful, open up a command prompt or terminal window and type
    
    npm
    
The output of this command should show you basic usage instructions for NPM. If you receive a
message reporting the command was not found, your installation was not successful.

### Install gulp
[Gulp.js](http://gulpjs.com/) is a build system that the uiBootstrap seed project utilizes to
pre-process and package all of the client side files. To install, open up a command prompt or
terminal window and type

    npm install -g gulp
    
This will install gulp globally on your system. If you receive an error, it may be necessary to
run the install command as an administrator.

- *Windows users*: Open the start menu and type `cmd`. The search should return a result for the
command prompt. Right click on the command prompt and choose *Run as administrator*.

- *OSX users*: Run the command with sudo `sudo npm install -g gulp`. You will then be prompted
to enter your OSX user account password.

To confirm installation was successful, in your command prompt or terminal window type `gulp`. You
should see a message indicating `Local gulp not found`. If you receive a message reporting the
command was not found, your installation was not successful.

### Install git

NPM uses [git](http://git-scm.com/) to download package dependencies. If you do not have git
installed, installation files are available.

- [Windows installer](http://msysgit.github.io/)
- [OSX installer](http://sourceforge.net/projects/git-osx-installer/)

### Download
You are now ready to download the project. There are a couple ways to do this.

#### Method 1: Clone via git

In your command prompt or terminal window, navigate to the
root folder you would like to place the source files (e.g. "Projects/").

    cd Projects
    
Now clone the repository...

    git clone https://github.com/gaigUXD/ui-bootstrap-seed.git my-project
    
...where `my-project` is the name of the folder you want the files to be cloned to. If you are
difficulties, see the troubleshooting section.

#### Method 2: Download the zip

Alternatively, you can download a zip containing the source files directly:

[Download Zip](https://github.com/gaigUXD/ui-bootstrap-seed/archive/master.zip)

## Install Project Dependencies

uiBootstrap relies on a number of dependencies specific to the project. These dependencies can
be easily downloaded using NPM. Inside your command prompt or terminal window, navigate to the
folder where you saved the source files.

    cd my-project
    
Now, run the npm install command:

    npm install
    
This process will create a `node_modules` folder inside the root of your source folder. Typically,
this will take about a minute or two to complete. If you run into difficulties, please refer to the
troubleshooting section of this document.

Finally, run the bower install command:

    bower install
    
This process will create a `bower_components` folder inside the root of your source folder.

## Start Gulp

You are now ready to run the gulp build. In your command prompt or terminal window, verify you are
in the root of your source folder and run this command:

    gulp
    
This will run the gulp build tasks and start a simple local http server on port 9000. The build
process will create a `build` folder in the root of your source folder that will serve all of the
project's compiled HTML, CSS, JavaScript, and image assets. In your browser, you can now navigate
to `http://localhost:9000` to see the seed project application.

*Note*: The gulp task will remain running and will watch your source files for changes. If a change
is detected, gulp will automatically re-run the necessary build tasks and reload your browser
window. To stop gulp at any time, press `ctrl + c` inside the command prompt or terminal window with
the running gulp process.

## Troubleshooting

- *When I try to clone the repository or run npm/bower commands, the process times out.*

This may be because the `git://` protocol is blocked by your firewall. You can configure git to use
`https://` instead of `git://` by running this command in a command prompt or terminal window:

    git config --global url."https://".insteadOf git://