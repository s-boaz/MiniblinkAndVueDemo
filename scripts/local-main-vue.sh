#!/bin/bash

cd $(dirname $0)/..

set -eo pipefail

cd ./src/resources/main-vue

#npm install
#npm run start
npm run build

#cd ../../
#
#rm -rf ../demo-main-vue/*
#
#
#mv examples/main-vue/dist/* ../demo-main-vue/
#cp ../demo-main-vue/index.html ../demo-main-vue/404.html
#cd ../demo-main-vue
#git add .
#git commit -m 'feat: demo修改'
#git push

