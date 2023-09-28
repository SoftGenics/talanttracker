
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler')
const db = require('../database/connection');

const otpGenerator = require('otp-generator')

const express = require('express');
const nodemailer = require('nodemailer');
var session = require('express-session');
const app = express();
const multer  = require('multer')

const path = require('path');
var fs = require('fs');








exports.Adminlogin = (request, response) => {
  // Capture the input fields
  let email = request.body.email;
  let password = request.body.password;
  
try{
  db.query("SELECT * FROM adminlogin WHERE email = ? ", [email], function (error, results, fields) {
  
   
    if (results) {
     
        if (results[0]?.password===password) {
          let jwtSecretKey = process.env.JWT_SECRET_KEY;
          let data = {
            time: Date(),
            userId: results[0]?.id,
           
          }

          const token = jwt.sign(data, jwtSecretKey);

          //srequest.session.token = token;
          return response.status(200).send({

            status: "true",
            token: token,
          });
        }
        else {
          return response.status(400).send({
            status: "false",
            message: "Email or Password is not correct"

          });
        }
      
    }
   });
}catch (error){
  console.log(error)
}





}

exports.forget = (request, response) => {


  // Capture the input fields
  let email = request.body.email;

  //let otp = otpGenerator.generate(6, { Alphabets: false, upperCaseAlphabets: false, specialChars: false });
 let otp=Math.floor(
    Math.random() * (999999 - 100000 + 1) + 100000)
 
  db.query("SELECT * FROM user WHERE email = ? ", [email], function (error, results, fields) {
    if (results) {
let user_id=results[0].id;
let  updateresults;
     db.query("SELECT * FROM userotp WHERE user_id = ? ", [user_id], function (error, otpresults, fields) {

       if(otpresults.length>0){
        db.query(`UPDATE userotp SET otp="${otp}" WHERE user_id = "${user_id}"`,function (error, updateresult, fields) {
          updateresults=updateresult;
        })
       }
       else{
        const sql = "INSERT INTO userotp VALUES ?";
        const values = [[null,user_id,otp,5,null,null]];
      
        db.query(sql, [values], (err, results, fields) => {
                
                  updateresults= results;
      
                })
       }

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
                subject: "Iwait - Change Password ",
                html: `<h1> OPT:${otp}</h1>`
              })
if(info){
  return response.status(200).send({
        
    status: "true",
    message: "send otp successfully",
    id:user_id


  });
}
      else{
        return response.status(400).send({
        
          status: "false",
          message: error
      
      
        });

      }        
          

          })
   
    }
    else {
      return response.status(400).send({
        status: "false",
        message: "Email is not correct"

      });
    }
  })
}


exports.user_verify=(req,res)=>{
  const usertype=req.user.usertype;
  return res.status(200).send({
    status: "true",
    message: "User is  correct",
    usertype:usertype

  });
}



exports.verify = (req, res) => {
  // Capture the input fields
  let otp=Math.floor(
    Math.random() * (999999 - 100000 + 1) + 100000)
  var id=req.params['id'];
  db.query("SELECT * FROM userotp WHERE user_id = ? ", [id], function (error, otpresults, fields) {
const current_time=new Date();
let timeDifference=0;
if(otpresults[0].updated_at){
timeDifference=current_time - otpresults[0].updated_at;
}
else{
  timeDifference=current_time - otpresults[0].created_at;
}


const expiretime = Math.floor(timeDifference / (1000 * 60));

console.log(expiretime);
if(expiretime<5){

  
  if(otpresults[0].otp==req.body.otp){
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
      time: Date(),
      userId: session.userId,
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    //srequest.session.token = token;

    db.query(`UPDATE userotp SET otp="${otp}" WHERE user_id = "${id}"`,function (error, updateresult, fields) {
     
    })
    return res.status(200).send({
  
      status: "true",
      token: token,
  
  
    });

  }
  else{
    return res.status(200).send({
  
      status: "false",
      message: "OTP not correct",
      
  
    });
  
  }

}
else{
  return res.status(200).send({
    
    status: "false",
    message: "OTP has expired",
    

  });
}

  })


 

}
exports.newpassword = (request, response) => {
  var id = request.user.userId;
  var password = bcrypt.hashSync(request.body.password, 8);
  var sql = `UPDATE user SET password = '${password}' WHERE id = '${id}'`
  db.query(sql, function (err, result) {
    if (err) throw err;

    return response.status(200).send({

      status: "true",
      message: "Password Changed successfully"


    });

  });

}

exports.item=(req,res)=>{

  db.query("SELECT * FROM item",function (error, results, fields) {
      if(results){
          res.send(results)
      }
  else{
      return "error";
  }
  })
};