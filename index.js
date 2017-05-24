var path = require('path');
var express = require('express');
var port = process.env.PORT || 3000
var path = require('path')
var ejs = require('ejs')
var app = express();
var indexRouter = require('./app/routes/index');
var userRouter = require('./app/routes/users');
var proxyRouter = require('./app/routes/proxytest')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/essay')

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname,'./views')));
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/api', proxyRouter)

app.listen(port)
console.log(`listening on ${port} ...`)

