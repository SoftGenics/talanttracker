const express=require('express');
const route=express.Router();
const controller=require('../controller/adminAssign');


route.post('/api/AdminAssign',controller.AdminAssign);


route.put('/api/EditAssign/:id',controller.EditAssign);



module.exports = route
