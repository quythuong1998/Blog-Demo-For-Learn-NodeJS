var express = require('express');
var testpost = express.Router();

var testpostController = require('../controller/testpost.controller'); 


testpost.get('/testpost', testpostController.testpost);

testpost.post('/testpost', testpostController.postpost);

testpost.put('/testpost/:id', testpostController.putpost);

testpost.patch('/testpost/:id', testpostController.patchpost);

testpost.delete('/testpost/:id', testpostController.deletepost);
module.exports = testpost;