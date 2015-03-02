var q = require('q');
var defer = q.defer();

function printerror(err) {
  console.log(err.message);
}

defer.promise.then(printerror);

setTimeout(defer.resolve, 300, new Error("REJECTED!"));
