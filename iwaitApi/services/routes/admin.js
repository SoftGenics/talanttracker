const express =require('express');
const route=express.Router();
const auth=require('../middleware/auth');

const multer  = require('multer')
const upload = multer({ dest: '../uploads/' })
var session = require('express-session');
var db=require('../database/connection')

const path = require('path');

var fs= require('fs');
const controller = require("../controllers/task_controller");
const fscontroller=require("../controllers/index");
const pricebytimeCon=require("../controllers/pricebytime"); 
const Admincontroller= require("../controllers/adminController");

route.post('/api/admin-login',Admincontroller.Adminlogin);
route.post('/api/task',controller.createtask);
route.get('/api/task',controller.gettask);
route.get('/api/singletask/:id',controller.singlegettask);
route.put('/api/edittask/:id',controller.edittask);
route.delete('/api/deletetask/:id',controller.deletetask);

route.get('/api/test',fscontroller.test);
// add price by time 
route.post('/api/addpricebytime',pricebytimeCon.addtimeAndPrice);
//get time price
route.get('/api/getpricebytime',pricebytimeCon.getTimePrice);

route.get('/item',Admincontroller.item);


module.exports = route