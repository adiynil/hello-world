# git初步操作

**查看配置信息&配置用户名和Email**

```
git config --list
git config --global user.name 'username'
git config --global user.email 'user@domin.com'
```

**初始化版本仓库&初始提交**

```
git init
```

```
git add *.c
git add LICENSE
git commit -m 'initial project version'
```

**克隆已经存在的仓库**

```
git clone [https|git|user@server:path/to/repo.git]
```

**查看当前文件状态&跟踪新文件/暂存修改文件**

```
git status [-s]
```

```
git add <file>
```

**生成 `.gitignore` 文件**

```
cat .gitignore
```

`.gitignore` 的sample

```
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

**提交更新**

```
git commit [-a] [-m 'commit message']
```

`git commit [-a]`会将所有不在暂存区的文件添加到暂存区再进行提交，不必要一个个文件`git add <filename>`

**移除文件**

直接从磁盘和暂存区删除

```
git rm <filename>
```

仅从暂存区删除，仍然保留在当前工作目录

```
git rm --cache <filename>
```

**移动文件**

```
git mv README.md README
```

相当于

```

mv README.md README
git rm README.md
git add README
```

**查看提交历史 **

```
git log [-p] [-3]
```

`-p`显示每次提交的变动信息

`-3`限制三条输出

**撤销操作**

提交之后发现有错需要重新提交

前提是自上次提交以来还没做任何修改

```
git commit --amend
```

取消暂存的文件

```
git reset HEAD <filename>
```

撤销对文件的修改（把文件恢复到上次提交的样子#不可逆）

```
git checkout -- <file>
```

