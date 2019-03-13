const express = require('express');
const app = express();
const port = 3000;
const shortid = require('shortid');
var cookieParser = require('cookie-parser')


var postRoute = require('./routers/post.route');
var authRoute = require('./routers/auth.route');
var authMiddleware = require('./middlewares/auth.middleware');


//using for get info of body, user input
var bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(express.static('publicfiles'));

app.get('/', function (request, respond) {		
	respond.render('index');
}) //index trong views

//tat ca cac /póst được gơm lại thành 1 route như thế này
app.use('/post',authMiddleware.requireAuth ,postRoute);
app.use('/auth', authRoute);



app.listen(port, function () {
	console.log('server listening on port: ', port);
})