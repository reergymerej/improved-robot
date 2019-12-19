import foo from './foo'

if (module.hot) {
  module.hot.accept('./foo.js', function() {
    console.log('The module has changed, hmr foo.js.')
  })
}
