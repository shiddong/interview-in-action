#!/usr/bin/env sh
###
 # @File: deploy
 # @Description: Github pages deploy shell
 # @Author: shiddong <shiddong@outlook.com>
 # @Date: 2020-08-16 19:38:35
 # @LastEditors: shiddong
 # @LastEditTime: 2020-08-16 19:40:45
 # @FilePath: /interview-in-action/deploy.sh
###

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:shiddong/interview-in-action.git master:gh-pages

cd -