module.exports = {
  publicPath: process.env.NODE_ENV == 'production' ? 'https://www.sonocaps.com.br/tema/sonocaps-vue/dist' : '/',
  devServer: {
    port: 8080,
  }
}
