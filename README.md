# Minesweeper

---

## Setup
This is to help me set up the local server on Ubuntu.

1. Go to `/etc/apache2/apache2.conf` and change the root directory
to `<this_path>/src`.
2. Do the same in `/etc/apache2/sites-available/000-default.conf`.
3. If access is denied, see [here](https://ubuntuforums.org/showthread.php?t=1591204)
or [here](http://askubuntu.com/questions/451922/apache-access-denied-because-search-permissions-are-missing)
to fix it.
4. Restart the server with `sudo service apache2 restart`.

---

## Resources
* https://www.dropbox.com/sh/2mzt7a7ufqbbgrj/AAAUsgkDVD8Bwp_Yoeq0Uo97a?dl=0
* http://code.tutsplus.com/tutorials/build-a-minesweeper-game-within-200-lines-of-code--active-8578
* http://www.dreamincode.net/forums/topic/242835-creating-a-simple-dynamic-website-with-php/
* http://rudiv.se/Development/Resource/creating-simple-dynamic-website-and-more-with-php