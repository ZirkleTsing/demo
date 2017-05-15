var path = require('path');
var express = require('express');
var ejs = require('ejs')
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname,'./views')));
app.use('/', indexRouter);
app.use('/users', userRouter);

var port = 3000

app.listen(port)
console.log(`listening on ${port} ...`)