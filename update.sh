#!/bin/sh
npm run build
cp ./src/delightfuldev-facebook-cover.png ./build/static/media/delightfuldev-facebook-cover.png
git checkout -B gh-pages
git add -f build
git commit -am "Rebuild website"
git filter-branch -f --prune-empty --subdirectory-filter build
echo "www.delightfuldev.com" > CNAME
git add -f CNAME
git commit -am "Rebuild website"
git push -f origin gh-pages
git checkout -
