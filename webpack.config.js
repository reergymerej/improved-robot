// __webpack_public_path__ = "http://localhost:8080/"

module.exports = {
  devServer: {
    hot: true,
    host: 'localhost',
    public: 'localhost:8080',
    publicPath: 'http://localhost:8080',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
  },
  output: {
    publicPath: '/',
  },
}
