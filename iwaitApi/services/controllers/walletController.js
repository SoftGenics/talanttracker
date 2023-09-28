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

exports.createAccount = (req, res) => {

    
    const user_id = req.body.user_id;
    const balance = req.body.balance;
   const sql1=`SELECT *FROM wallet WHERE user_id=${user_id}`;
db.query(sql1,function(error,result){

    if(result[0]?.user_id==user_id){
        return res.status(400).send({
  
            status: "false",
            message: "allready exist"
    
    
          });
    }
    else{
        const sql = "INSERT INTO wallet VALUES ?";
    const values = [[null,user_id, balance,null,null]];
  
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
          message: "success fully created"
  
  
        });
  
  
      }
  
    })
    }

    

})
  

       
  
         
        
        }
        exports.addBalance=(req,res)=>{
            const id=req.params['id'];
            const sql1=`SELECT *FROM wallet WHERE user_id=${id}`;
            db.query(sql1,function(error,result){

                const balance = req.body.balance;
       var totalmoney=result[0].balance+parseInt(balance);
        
 
        var sql = `UPDATE wallet SET balance = "${totalmoney}" WHERE user_id = "${id}"`
        db.query(sql, function (err, result) {
      if(result){
        
        return res.status(200).send({
          status: "success",
          message: "Balance updated",
        data:result
      
        });
      }
      else{
        return res.status(400).send({
          status: "Fail",
          message: err
      
        });
      
      }
      
      
        })
    })
    }      
    exports.withdrawBalance=(req,res)=>{
        const id=req.params['id'];
        const sql1=`SELECT *FROM wallet WHERE user_id=${id}`;
        db.query(sql1,function(error,result){

            const balance = req.body.balance;
            if(result[0].balance>0){
   var totalmoney=result[0].balance-parseInt(balance);
    

    var sql = `UPDATE wallet SET balance = "${totalmoney}" WHERE user_id = "${id}"`
    db.query(sql, function (err, result) {
  if(result){
    
    return res.status(200).send({
      status: "success",
      message: "Balance updated",
    data:result
  
    });
  }
  else{
    return res.status(400).send({
      status: "Fail",
      message: err
  
    });
  
  }
  
  
    })
}
else{
    return res.status(400).send({
      status: "Fail",
      message: "Balance is not sufficient"
  
    });
  
  }
})
}    

exports.singlegettask=(req,res)=>{
  const id=req.params['id'];
  const sql1=`SELECT *FROM wallet WHERE user_id=${id}`;
  db.query(sql1,function(error,result){

      const balance = req.body.balance;
      if(result[0]){

        return res.status(200).send({
          status: "success",
          data: result[0].balance
      
        });

      }
      else{
        return res.status(200).send({
          status: "Fail",
          message: "Something Wrong"
      
        });
      }
      })

}


exports.withdrawotp=(req,res)=>{
  const id=req.user.id;
  const sql1=`SELECT *FROM user WHERE user_id=${id}`;
  db.query(sql1,function(error,result){

    

    
      if(result[0]){

        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'softgenics.neeraj@gmail.com', // Admin Gmail ID
            pass: 'paajirebxodgjpcl', // Admin Gmail Password
          },
        })
        //  Send Email
        let info = transporter.sendMail({
          from: 'softgenics.neeraj@gmail.com',
          to: `${email}`,
          subject: "Iwait - Withdraw ",
          html: `<h3>OTP:${otp}</h3> `
        })

        return res.status(200).send({
          status: "success",
          data: result[0].balance
      
        });

      }
      else{
        return res.status(200).send({
          status: "Fail",
          message: "Something Wrong"
      
        });
      }
      })

}

exports.TotalAmount=(req,res)=>{
 
  const sql1=`SELECT *FROM wallet `;
  db.query(sql1,function(error,result){
let totalmoney=0;
    for(let i=0;i<result.length;i++)
      {
totalmoney=totalmoney+(result[i].balance);
      }
      if(result){

        return res.status(200).send({
          status: "success",
          data: totalmoney
      
        });

      }
      else{
        return res.status(200).send({
          status: "Fail",
          message: "Something Wrong"
      
        });
      }
      })

}
    
  
  
  