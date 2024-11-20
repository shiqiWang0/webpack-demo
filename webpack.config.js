const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = (env) => {
    console.log('remove: ', env.remove); // "license"
    const appTarget = env.remove === 'license' ? 'rmIndex' : 'index'
    console.log('appTarget',appTarget)
    return {
        mode: 'development',
        // stats: 'verbose', // 打印信息
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true  // 打包之前清理dist文件夹
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './public/index.html',  // 生成HTML文件的模板文件
                filename: 'index.html',  // 生成的HTML文件名
                inject: 'body'  // <script>标签插入的地方
            }),
            new webpack.NormalModuleReplacementPlugin(/(.*)APP_TARGET(\.*)/,
                function (resource) {
                    resource.request = resource.request.replace(/APP_TARGET/, `${appTarget}`)
                })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            plugins: [
                                // 主要改变在此处
                                ["@babel/plugin-transform-runtime"]
                            ]
                        }
                    }
                }
            ]
        }
    }
};
