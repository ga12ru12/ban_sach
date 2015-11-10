var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var engine = require('ejs-mate');
var moment = require('moment');

var mongoose = require('mongoose');
mongoose.connect('mongodb://quang:quang123@ds043962.mongolab.com:43962/demo');
require('./models/Account');
require('./models/Category');
require('./models/Book');
require('./models/Transaction');

var routes = require('./routes/index');
var manager = require('./routes/manager');
var customer = require('./routes/customer');

require('./controllers/init');

var app = express();

// view engine setup
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'This is my secret',
  resave: true,
  saveUninitialized: true
}));

app.all('*', function(req, res, next){
  res.locals.title = "Demo";
  res.locals.moment = moment;
  if(req.session.user){
    res.locals.user = req.session.user;
    res.locals.authed = true;
  }else{
    res.locals.authed = false;
  }
  if(req.session.err){
    res.locals.err = new String(req.session.err);
    delete req.session.err;
  }
  if(req.session.success){
    res.locals.success = new String(req.session.success);
    delete req.session.success;
  }
  next();
});

app.use('/', routes);
app.use('/manager', function(req, res, next){
  if(req.session.user){
    next();
  }else{
    res.redirect('/');
  }
}, manager);
app.use('/profile', function(req, res, next){
  if(req.session.user){
    next();
  }else{
    res.redirect('/');
  }
}, customer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
