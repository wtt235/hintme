var r = require('rethinkdb'),
    express = require('express');

var rdb_conn;
r.connect({host: 'localhost',
           port: 28015,
           db: 'hmbomt'}, 
          function(err, conn){
            if (err) throw err;
            rdb_conn = conn;
          });

var app = express();

// Serve static assets from ../public
app.use("/public", express.static(__dirname + '/../public'));

// Routes
app.get('/', function(req, res){
  res.send("Hello, World");
});

app.get('/api/v0/users', function(req, res){
  r
    .db('hmbomt')
    .table('users')
    .run(rdb_conn, function(err, cursor){
      if (err) throw err;
      cursor.toArray(function(err, arr){
        res.json(arr);
      });
    });
});
        
var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server has started at host " + host + ":" + port);
});
