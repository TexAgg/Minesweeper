# Minesweeper
In order to get more familiar with Typescript,
I decided to recreate one of my favorite games.

---

## Instructions

### Building
NodeJS must be installed,
and the modules [browserify](http://browserify.org/), 
[typescript](https://www.typescriptlang.org/),
and [uglifyjs](https://www.npmjs.com/package/uglify-js)
must be globally installed.

#### Linux
In the root of the project,
run `build.sh`.

#### Other OS
In the command prompt at the root of the project,
run `python build.py`.

### Setup
This is to help me set up the local server on Ubuntu,
although I should have done [this](http://php.net/manual/en/features.commandline.webserver.php).

1. Go to `/etc/apache2/apache2.conf` and change the root directory
to `<this_path>/src`.
2. Do the same in `/etc/apache2/sites-available/000-default.conf`.
3. If access is denied, see [here](https://ubuntuforums.org/showthread.php?t=1591204)
or [here](http://askubuntu.com/questions/451922/apache-access-denied-because-search-permissions-are-missing)
to fix it.
4. Restart the server with `sudo service apache2 restart`.

### Deployment
[`gcloud app deploy`](https://cloud.google.com/sdk/gcloud/reference/app/deploy)

---

## Resources
* [Typescript project example](https://www.dropbox.com/sh/2mzt7a7ufqbbgrj/AAAUsgkDVD8Bwp_Yoeq0Uo97a?dl=0)
* [Actionscript example](http://code.tutsplus.com/tutorials/build-a-minesweeper-game-within-200-lines-of-code--active-8578)
* [Javascript stopwatch](https://jsfiddle.net/pertrai1/r3su6b6n/)
* [Post-Redirect-Get](http://wordsideasandthings.blogspot.ca/2013/04/post-redirect-get-pattern-in-php.html)