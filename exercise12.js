var qhttp = require('q-io/http');
var _ = require('lodash');
var path1 = "http://localhost:7000/";
var path2 = "http://localhost:7001/";

var path2id = _.bind(String.prototype.concat, path2);

qhttp.read(path1)
.then(_.compose(qhttp.read, path2id))
.then(_.compose(console.log, JSON.parse))
.then(null, console.error)
.done();


/*
compose(x,y) = x(y)
*/
