// 同步loader
module.exports = function(source) {
    // loader-utils 可以用该插件来 获取loader参数选项
    console.log(this.query); // loader 的options对象
    const result = source.replace('world', this.query.name);
    this.callback(null, result);
};
// 异步情况
// module.exports = function(source) {
//     const callback = this.async();
//     const result = source.replace('Andy', this.query.name);
//     setTimeout(function() {
//         callback(null, result);
//     }, 1000);
// };

// const babel = require('@babel/core');

// module.exports = function(source) {
//     const { code, map, ast } = babel.transformSync(source, { ast: true });
//     console.log(code);
//     this.callback(null, code, map);
// };
