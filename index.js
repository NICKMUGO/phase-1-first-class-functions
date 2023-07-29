before(function(done) {
  server = require('../app')
  try {
    server.listen(process.env.PORT)
    done()
  } catch (err) {
    console.log('outer error', err)
    done(err)
  }
})
function receivesAFunction(callback){
  return callback()
}
console.log(receivesAFunction(function (){return "Thankyou for shopping with us. Have a lovely day."}))
function returnsANamedFunction(){
  function namedFunction() { return }
  return namedFunction
}
returnsANamedFunction();
function returnsAnAnonymousFunction(){
  return function () {
  };
}
returnsAnAnonymousFunction();