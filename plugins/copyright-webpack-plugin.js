const { compilation } = require("webpack");

class CopyrightWebpackPlugin {
    constructor(options) {
        console.log(options)
    }

    apply(compiler) {


        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log('compiler-同步写法')
        })

        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            debugger;
            compilation.assets['copyright.txt'] = {
                source: function() {
                    return 'copyright by csx'
                },
                size: function() {
                    return 21;
                }
            }
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;