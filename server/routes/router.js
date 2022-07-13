const express =require('express');
const route=express.Router();
//const controller=require('../controller/controller');
const path = require('path');
const bodyparser=require('body-parser');
var fs= require('fs');
const { authJwt } = require("../middleware");
const controller2 = require("../controller/controller");
const { protect } = require('../middleware/middile')
const clientController=require('../controller/addclientController');

const invoiceController=require('../controller/InvoiceController')


route.post('/api/admin',controller2.user);
route.post('/api/login',controller2.loginAdmin);
//route.get('/me',protect, controller2.getMe);


//client
route.post('/api/addclient',clientController.addClient);
route.get('/api/allClient',clientController.findAllclient);

                                route.put('/api/editclient/:id',clientController.editClient);
                                route.delete('/api/deleteclient/:id',clientController.deleteclient);



                                //invoice
                                                  route.post('/api/addinvoice',invoiceController.addInvoice);
                                                  route.get('/api/findInvoice',invoiceController.findInvoice);
                                                  route.delete('/api/deleteInvoice/:id',invoiceController.deleteInvoice);



route.use(bodyparser.urlencoded({extended:true}))



//





     module.exports = route