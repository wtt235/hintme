## Hint me baby one more time

### Getting started

#### Dependencies:

1. [NodeJS](http://nodejs.org)
2. [NPM](http://npmjs.org)
3. [RethinkDB](http://rethinkdb.com)

Download and install all the things above

#### Setup of a NodeJS app

After initializing the git repository (fresh repo with only .git), 
`npm init` -  to setup a NodeJS package for the project
`npm install --save rethinkdb` - install rethinkdb driver for nodejs AND save it to package.json

Add `node_modules` folder to .gitignore (we don't want to save this)


#### Setup of RethinkDB

After installing RethinkDB, create a folder in the project called `tmpdata` (or whatever you'd like), and add it to .gitignore.

*To create a RethinkDB server the server*
`rethinkdb create`

*To start a RethinkDB instance (from the same folder)*
`rethinkdb serve`

*To enter the admin console*
`rethinkdb admin`

The management console should be available @ http://localhost:8080


#### Emacs use

Development is done in Emacs24, because it has good package management built in.

Install emacs with `sudo apt-get install emacs24`

You will need to add repositories to access more packages:

in `~/.emacs`:
>    (setq package-archives '(("gnu" . "http://elpa.gnu.org/packages/")
>                             ("marmalade" . "https://marmalade-repo.org/packages/")
>                             ("melpa" . "http://melpa.org/packages/")))

Some good packages to have:
- js2-mode
- auto-complete-mode

Some good configuration options to set in ~/.emacs:
>   (ido-mode t)
>   (setq-default indent-tabs-mode nil)
>   (setq tab-width 2) ; or any other preferred value
>   (defvaralias 'c-basic-offset 'tab-width)
>   (defvaralias 'cperl-indent-level 'tab-width)
>   (menu-bar-mode nil)
