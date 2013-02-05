
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

//express.js configuration options
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  //app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(path.join(process.env.PWD,'public'));
});

app.configure('development', function(){var fs = require('fs');
  app.use(express.errorHandler());
});

//express.js routing
app.get('/', routes.index);
app.get('/controller', routes.controller);

//hack because there is a bug in express relating to pulling in JavaScript files for client-side use
app.get('/socket.io/socket.io.js', function(req, res) {
    fs.readFile(path.join(__dirname,'node_modules','/socket.io/node_modules/socket.io-client/dist/socket.io.js'), function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(content, 'utf-8');
        }
    });
});

//socket.io server
io.sockets.on('connection', function (socket) {
    socket.on('change_slide', function(data) {
	io.sockets.emit('move_slide', data);
    });
});

//launch express js
server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});

