#!/bin/sh
npm run build
# cp ./src/delightfuldev-facebook-cover.png ./build/static/media/delightfuldev-facebook-cover.png
# git checkout -B gh-pages
# git add -f build
# git commit -am "Rebuild website"
# git filter-branch -f --prune-empty --subdirectory-filter build
# echo "www.delightfuldev.com" > CNAME
# git add -f CNAME
# git commit -am "Rebuild website"
# git push -f origin gh-pages
# git checkout -

scp -r build/ "$1@delightfuldev.com:/home/$1/html"
echo "Now log in to server, then sudo cp -R html/ /var/www/ && rm -rf html"
