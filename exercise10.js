var qioHttp = require('q-io/http');

var promise = qioHttp.read("http://localhost:1337").then(function(file) {
  console.log(JSON.parse(file));
}).then(null, console.log).done();
