const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const productionConfig = require('./webpack.prod')
const developmentConfig = require('./webpack.dev')


module.exports = env => {

  switch (env) {
    case 'development':
      console.log('in development')
      return merge(commonConfig, developmentConfig);
    case 'production':
      console.log('in production')
      return merge(commonConfig, productionConfig);
    case 'lint':
      console.log('in lint')
      return commonConfig
    default:
      throw new Error('No matching configuration was found!');
  }

}