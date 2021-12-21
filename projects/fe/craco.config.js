module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': 'http://localhost:4000'
    },
  }
};