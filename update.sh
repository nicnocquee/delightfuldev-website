#!/bin/sh
npm run build
git checkout -B gh-pages
git add -f build
echo "www.delightfuldev.com" > CNAME
git commit -am "Rebuild website"
git filter-branch -f --prune-empty --subdirectory-filter build
git push -f origin gh-pages
git checkout -
