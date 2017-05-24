var path = require('path')
var ejs = require('ejs')

var express = require('express');
var app = express();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var proxyRouter = require('./routes/proxytest')

var port = process.env.PORT || 3000

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/essay')

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname,'./views')));

//挂载路由
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/api', proxyRouter)

//监听端口
app.listen(port)
console.log(`listening on ${port} ...`)

