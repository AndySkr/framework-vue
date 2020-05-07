const open = require('open');
class MyPlugin {
    // 在构造函数中获取用户给该插件传入的配置
    constructor(buildSuccess, buildFailed, options) {
        this.buildSuccess = buildSuccess;
        this.buildFailed = buildFailed;
        this.url = options.url;
    }
    // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
    apply(compiler) {
        // 监听事件
        compiler.hooks.done.tap('MyPlugin', (status) => {
            this.buildSuccess(status);
            open(this.url);
        });
        compiler.hooks.failed.tap('MyPlugin', (err) => {
            this.buildFailed(err);
        });
    }
}
module.exports = MyPlugin;
