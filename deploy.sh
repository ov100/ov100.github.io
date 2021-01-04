#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

MY_PATH="$PWD"
rm -rf assets java *.html

#进入my-doc目录
cd $(dirname "$PWD")/my-doc

# 生成静态文件
#npm run docs:build

# 进入生成的文件夹
echo "16$PWD"
cd docs/.vuepress/dist

# 回到当前仓库目录
cd $MY_PATH
echo "21$PWD"
cp -rf $(dirname "$PWD")/my-doc/dist/* .

git init
git add -A
git commit -m 'deploy'

git push
