var q = require('q');

var promise1 = q.defer();
var promise2 = q.defer();

function all(p1, p2) {
  var promise3 = q.defer();
  var counter = 0,
      val1,
      val2;

  p1.then(function(result) {
    val1 = result;
    ++counter;
    if (counter >=2) promise3.resolve([val1, val2]);
  }).then(null, promise3.reject)
    .done();

  p2.then(function (result) {
    val2 = result;
    ++counter;
    if (counter >=2) promise3.resolve([val1, val2]);
  }).then(null, promise3.reject)
    .done();

    return promise3.promise;
  }

all(promise1.promise, promise2.promise)
.then(console.log)
.done();

setTimeout(function () {
  promise1.resolve("PROMISES");
  promise2.resolve("FTW");
}, 200);
