const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler')
const db = require('../database/connection');

const otpGenerator = require('otp-generator')

const express = require('express');
const nodemailer = require('nodemailer');
var session = require('express-session');
const app = express();
const multer  = require('multer');

const upload = multer({ dest: '../uploads/' })

exports.addtimeAndPrice = (req, res) => {

    
  
    const price = req.body.price;
   const time=req.body.time;
   
  
    
    
 // const jsondata=JSON.parse(pricewithTime)

 // console.log("json data",jsondata);
          const sql = "INSERT INTO bookingprice VALUES ?";
    const values = [[null,time,price]];
    
  
    db.query(sql, [values], (err, results, fields) => {
      if (err) {
        return res.status(400).send({
  
          status: "false",
          message: err
  
  
        });
      }
      else {
        return res.status(200).send({
  
          status: "Success",
          message: "success fully added"
  
  
        });
  
  
      }
  
    })
  
         
        
        }



        exports.getTimePrice=(req,res)=>{

          var sql="SELECT *FROM bookingprice ORDER BY id DESC";
          db.query(sql,function(err,results,next){
            console.log(results);
            if(results){
              return res.status(200).send(
                results
              )
              

            }
            else{
              return res.status(400).send({
                status:"fail",
                message:"Somthing is wrong"
              })

            }
          })
        }
exports.singlegettask=(req,res)=>{
  var id=req.params['id'];
  var sql=`SELECT *FROM task WHERE id='${id}'`;
          db.query(sql,function(err,results,next){

            if(results){
              return res.status(200).send({
                status:"success",
                data:results
              })

            }
            else{
              return res.status(400).send({
                status:"fail",
                message:"Somthing is wrong"
              })

            }
          })

}
exports.edittask=(req,res)=>{
  var id=req.params['id'];


  var date=req.body.date;
  var start_time=req.body.start_time;
  var end_time=req.body.end_time;
  var pincode=req.body.pincode;
 


  var sql=`UPDATE task SET date='${date}', start_time='${start_time}', end_time='${end_time}', pincode='${pincode}' WHERE id=${id}`;
          db.query(sql,function(err,results,next){

            if(results){
              return res.status(200).send({
                status:"success",
                data:results
              })

            }
            else{
              return res.status(400).send({
                status:"fail",
                message:err
              })

            }
          })
}
exports.deletetask=(req,res)=>{
  var id=req.params['id'];
  var sql=`DELETE FROM task WHERE id=${id}`;

db.query(sql,function(error,result){

if(result){
  return res.status(200).send({
    status: "success",
    message: "success full deleted"

  });
  }
  else{
    return res.status(400).send({
      status: "fail",
      message: error
  
    });
}

})
}
    
  
  
  