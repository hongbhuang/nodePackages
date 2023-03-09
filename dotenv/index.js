const dotenv = require('dotenv');
const path = require('path');

process.env.NAME = 'will be override';
const envFilePath =
  process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '.env.prod')
    : path.resolve(__dirname, '.env.dev');

// 解析env文件。将变量存到process.env中
dotenv.config({
  path: envFilePath, //env文件路径
  debug: true, //打印额外信息
  encoding: 'utf8', //解析文件的编码
  override: true, //覆盖已存在的key
});
console.log(process.env.NAME);

console.log(
  dotenv.parse(`
  A=1
  B=2
`)
);

//在commonjs中,自动注入了以下变量
// __dirname      __dirname是commonjs规范的内置变量。如果使用了esm，是不会注入这个变量的。__dirname指的是当前文件所在文件夹的绝对路径。
// __filename    当前文件的绝对路径相当于__dirname + filename
