var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var pizza = require('./models/pizza');

// async function recreateDB(){
//   // Delete everything
//   await pizza.deleteMany();
//   let instance1 = new
//   pizza({pizza_name:" Chicken Pizza", pizza_type:'Chicken', pizza_price:200});
//   instance1.save().then(doc=>{
//   console.log("First object saved")}
//   ).catch(err=>{
//   console.error(err)
//   });
//   let instance2 = new
//   pizza({pizza_name:" Cheese Pizza", pizza_type:'Cheese', pizza_price:150});
//   instance2.save().then(doc=>{
//   console.log("second object saved")}
//   ).catch(err=>{
//   console.error(err)
//   });
//   let instance3 = new
//   pizza({pizza_name:" Veg onion pizza", pizza_type:'veg', pizza_price:100});
//   instance3.save().then(doc=>{
//   console.log("third object saved")}
//   ).catch(err=>{
//   console.error(err)
//   });
//   mongoose.connect(connectionString);
//   }
//   let reseed = true;
//   if (reseed) {recreateDB();}
  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var pizzaRouter = require('./routes/pizza');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use('/pizza', pizzaRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
  


module.exports = app;

