__webpack_public_path__ = "http://localhost:8080/";
import foo from './foo'

if (module.hot) {
  module.hot.accept('./foo.js', function() {
    console.log('The module has changed, hmr foo.js.')
  })
}
