const proxy = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    proxy('/api', {
      target: 'https://confr-api.herokuapp.com',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
    })
  )
}
