# nodemon

> > 监听某个目录或某个文件，当发生变动时执行某个脚本或命令

## 文档

Usage: nodemon [options] [script.js] [args]

Options:

--config file ............ alternate nodemon.json config file to use =========》指定配置文件
-e, --ext ................ extensions to look for, ie. js,pug,hbs.=========》 指定监听的文件类型
-x, --exec app ........... execute script with "app", ie. -x "python -v". =========》
-w, --watch path ......... watch directory "path" or files. use once for each directory or file to watch. =========》监听某个文件或目录的文件改动
-i, --ignore ............. ignore specific files or directories. =========》某个文件或目录的改动不会触发 restart
-V, --verbose ............ show detail on what is causing restarts. =========》显示是哪个文件的修改导致的 restart
-- <your args> ........... to tell nodemon stop slurping arguments.

Note: if the script is omitted, nodemon will try to read "main" from package.json and without a nodemon.json, nodemon will monitor .js, .mjs, .coffee, .litcoffee, and .json by default. =========》 如果没有指定要执行的文件，会默认找 package.json 里的 main 字段，默认监听.js, .mjs, .coffee, .litcoffee, and .json 类型的文件

For advanced nodemon configuration use nodemon.json: nodemon --help config See also the sample: https://github.com/remy/nodemon/wiki/Sample-nodemon.json

Examples:

$ nodemon server.js
$ nodemon -w ../foo server.js apparg1 apparg2
$ nodemon --exec python app.py
$ nodemon --exec "make build" -e "styl hbs"
$ nodemon app.js -- --config # pass config to app.js

All options are docu
mented under: nodemon --help options

## 例子

### 例子 1

nodemon -e js -V -w ./nodemon -i ./nodemon/ignore.js ./nodemon/index.js frank

只监听 js 文件的变化
以冗余模式执行
只监听./nodemon 目录的变化
忽略./nodemon/ignore.js 文件的变化
有变动时最终执行的脚本为 ./nodemon/index.js 并且传给脚本的参数为 frank

### 例子 2

nodemon -e js -x 'ls'
只监听 js 文件的变化
当变化时执行 ls 命令
