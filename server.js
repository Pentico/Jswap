/**
 * Created by Tuane on 2016/10/31.
 */

require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var express = require('express');
var multer = require('multer');
var path = require('path');
var logger = require('morgan');
var flash    = require('connect-flash');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

 /////  User Defined /////
var userRoutes = require('./Routes/User');
var mainRoutes = require('./Routes');
var itemsRoutes = require('./Routes/Items');
var uploadImage = require('./controllers/uploadData/uploadImage');
var config = require('./config');


var app = express();

app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

 /// Mongoose Connectivity
 mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('error', function () {
    console.log('Error: could not connect to MongoDB. Please make sure its running!!');
    process.exit();
});


// required for passport
app.use(session({ secret: 'TheSecondComingTheSecondComingIsAtHand' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./controllers/uploadData/uploadImage')(app);

app.use('/UserServer', userRoutes);
app.use('/index', mainRoutes);
app.use('/Items', itemsRoutes);
app.use('/UploadPicture', uploadImage);

app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);


var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
    onlineUsers++
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });
});

server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
