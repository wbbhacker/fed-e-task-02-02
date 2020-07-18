const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const  HtmlWebpackPlugin  = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

class MyPlugin{
  apply(compiler){
    console.log('MyPlugin 启动')
    compiler.hooks.emit.tap('MyPlugin',compilation => {
      // compilation =》 可以理解为此次打包的上下文
      for (const name in compilation.assets ){
        // console.log(name)
        // console.log(compilation.assets[name].source())
        if(name.endsWith('.js')){
          const contents = compilation.assets[name].source()
          const widthoutComments = contents.replace(/\/\*\*+\//g, '')
          compilation.assets[name] = {
            source: () => widthoutComments,
            size: () => widthoutComments.length
          }
        }
      }
    })
  }
}

module.exports = {
  mode:'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'./public'
  },
  devServer:{
    // contentBase:'./public'
  },
  module:{
      rules:[
        // {
        //   test: /.md$/,
        //   use: [
        //     'html-loader',
        //     './markdown-loader.js',
        //   ]
        // },
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    // 用于生成 index.html
    new HtmlWebpackPlugin({
      title:'Webpack Plugin Sample',
      meta:{
        viewport:'width=device-width'
      },
      template:'./src/index.html'
    }),
    // 用于生成 about.html
    new HtmlWebpackPlugin({
      filename:'about.html'
    }),
    new CopyWebpackPlugin({
      patterns:[
        'public'
      ]
    }),
    // new MyPlugin()
  ]
};