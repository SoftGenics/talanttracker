const express =require('express');
const route=express.Router();
//const controller=require('../controller/controller');
const path = require('path');
const bodyparser=require('body-parser');
var fs= require('fs');
const { authJwt } = require("../middleware");
const controller2 = require("../controller/usercontroller");
const { protect } = require('../middleware/middile')

route.post('/api/users',controller2.user);
route.get('/api/usersbyId/:id',controller2.userId);
route.post('/api/userlogin',controller2.loginUser);
route.get('/me',protect, controller2.getMe);
route.get('/api/allUser',controller2.findUser);
route.get('/api/todayUser', controller2.todayUser);
route.get('/api/weekendUser', controller2.weakUser);
route.get('/api/lastMonthUser', controller2.lastMonth);
route.get('/api/lastYearUser', controller2.lastYear);

route.post('/api/user',controller2.profile);
//route.post('/api/getuser',controller2.getprofile);

route.post('/api/addRating',controller2.Rating);
route.get('/api/viewRating',controller2.findRating);





route.use(bodyparser.urlencoded({extended:true}))



//





     module.exports = route