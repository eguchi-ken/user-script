#!/bin/bash

! [ -n "$DAILY_REPO_DIR" ] && echo "環境変数 DAILY_REPO_DIR を与えてください" && exit 1
! [ -d $DAILY_REPO_DIR ]   && echo "環境変数 DAILY_REPO_DIR にディレクトリを与えてください" && exit 1

cd $DAILY_REPO_DIR;

! git status > /dev/null 2>&1 && echo "$DAILY_REPO_DIR は git で管理されていません" && exit 1

git add -A
git commit -m "Create snapshot by daily-repo"
git push origin master
