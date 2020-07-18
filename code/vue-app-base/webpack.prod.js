const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
};