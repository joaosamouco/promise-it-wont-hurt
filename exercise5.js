var q = require('q');
var defer = q.defer();

var attachTitle = function(elem){
  return "DR. " + elem;
}

defer.promise.then(attachTitle).then(console.log);

defer.resolve("MANHATTAN");
