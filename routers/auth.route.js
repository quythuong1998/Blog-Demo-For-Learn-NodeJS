var express = require('express');
var authRouter = express.Router();

var authController = require('../controller/auth.controller'); 
//var postValidate = require('../validation/post.validation');

authRouter.get('/login', authController.login);

authRouter.post('/login', authController.loginPOST);

module.exports = authRouter;