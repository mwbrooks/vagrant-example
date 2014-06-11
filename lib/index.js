/*!
 * Module dependencies.
 */

var connect = require('connect'),
    http = require('http'),
    app = connect();

// setup connect middleware
app.use(connect.logger('dev'))
   .use(function(req, res) {
       res.end('Hello from connect land!');
});

// create http server
var server = http.createServer(app);
server.on('listening', function() {
    console.log('server listening on http://localhost:3000');
});
server.listen(3000);
