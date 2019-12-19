import foo from './foo'

if (module.hot) {
  __webpack_public_path__ = "http://localhost:8080/";
  module.hot.accept('./foo.js', function() {
    console.log('The module has changed, hmr foo.js.')
  })
}
