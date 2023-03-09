- 在 node.js 执行环境中,所有模块都可以访问到一个全局进程变量 process。
- 在 process 全局变量身上都一个对象叫 env
- 很多前端脚手架配置文件里的 process.env.NODE_ENV 就是在 node.js 执行环境下的全局对象 process.env 上添加了一个很简单的字符串 eg. development production
- cross-env 是一个第三方库,可以不在 .js 文件中,以命令的方式给 process.env 动态的添加各种属性。比如在 package.json 中的 scripts 脚本里配置。

```json
// 在 package.json 中
{
    "scripts:" : {
        "setName": "cross-env name=123",//可以光设置环境变量,但不执行任何脚本
        "cross": "cross-env Name=frank Age=28 node ./crossEnv/index.js",//先设置环境变量，然后执行某个脚本，此时脚本里就能拿到设置的环境变量
        "Set": "A=B C=D" //虽然不用cross-env也可以指定，但是cross-env保证了跨平台兼容性，无论windows mac还是linux
    }
}
```

```javascript
// 也可以直接在js中设置
process.env.fccc = '123';
process.env.haha = 'zhnas';
```
