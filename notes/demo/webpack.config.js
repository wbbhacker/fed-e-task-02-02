const path = require('path');

module.exports = {
  mode:'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'dist/'
  },
  module:{
    rules:[
      {
        test:/.html$/,
        use:{
          loader: 'html-loader',
          options:{
            attrs:['img.src','a.href']
          }
        }
      },
      {
        test:/.js$/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      {
        test:/.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/.png$/,
        use:{
          loader:'url-loader',
          options:{
            limit:10*1024
          }
        }
        
      }
    ]
  }
};