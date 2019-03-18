var express = require('express');
var testpost = express.Router();

var testpostController = require('../controller/testpost.controller'); 


testpost.get('/testpost', testpostController.testpost);





module.exports = testpost;