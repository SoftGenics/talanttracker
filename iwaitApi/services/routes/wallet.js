const express =require('express');
const route=express.Router();
const auth=require('../middleware/auth');

const multer  = require('multer')
const upload = multer({ dest: '../uploads/' })
var session = require('express-session');

const path = require('path');

var fs= require('fs');
const controller = require("../controllers/walletController");
route.post('/api/create-account',controller.createAccount);
route.get('/api/balance',controller.TotalAmount);
route.put('/api/add-balance/:id',controller.addBalance);
//route.get('/api/view-wallet',controller.gettask);
route.get('/api/single-wallet-view/:id',controller.singlegettask);

route.get('/api/withdrawotp/:id',controller.withdrawotp);
 route.put('/api/withdraw/:id',controller.withdrawBalance);
// route.put('/api/edittask/:id',controller.edittask);
// route.delete('/api/deletetask/:id',controller.deletetask);


module.exports = route

