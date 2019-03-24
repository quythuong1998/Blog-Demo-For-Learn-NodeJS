require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const shortid = require('shortid');
var cookieParser = require('cookie-parser')

//connect database mongodb
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true } ,  function (err) {
    if (err) throw err;
    console.log('Successfully connected');
})




var postRoute = require('./routers/post.route');
var authRoute = require('./routers/auth.route');
var authMiddleware = require('./middlewares/auth.middleware');
var testpostRoute = require('./routers/testpost.route');


//using for get info of body, user input
var bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET)); //day la secret, dang ra phai generate mot chuoi ngau nhien nao no de vao day
app.use(express.static('publicfiles'));

app.get('/', function (request, respond) {		
	respond.render('index');
}) //index trong views

//tat ca cac /póst được gơm lại thành 1 route như thế này
app.use('/post', authMiddleware.requireAuth, postRoute);
app.use('/auth', authRoute);
app.use('/testpost', testpostRoute);


app.listen(port, function () {
	console.log('server listening on port: ', port);
})

