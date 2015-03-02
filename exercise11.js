var qioHttp = require('q-io/http');

qioHttp.read("http://localhost:7000/").then(function(id) {
  return qioHttp.read("http://localhost:7001/" + id);
}).then(function(json) {
  console.log(JSON.parse(json));
}).then(null, console.log).done();
