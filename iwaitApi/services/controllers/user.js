
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


exports.worker = (req, res) => {
  
  const fullName = req.body.fullName;
  const applaing = req.body.applaing;
  const email = req.body.email;
  const phone = req.body.phone;
  const door_no = req.body.door_no;
  const street_add = req.body.street_add;
  const post_code = req.body.post_code;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const about_iwait = req.body.about_iwait;
  const password = req.body.password;
  const gender = req.body.gender;
  const confirmPassword = req.body.conformPsw;

  const cripted_password = bcrypt.hashSync(password, 8);

  const values = [
    [
      null,
      fullName,
      applaing,
      email,
      phone,
      door_no,
      street_add,
      post_code,
      city,
      state,
      country,
      about_iwait,
      cripted_password,
      gender,
      null,
      null
    ],
  ];


  db.query("SELECT * FROM worker WHERE email = ? ", [email], function (error, results, fields) {
    if (results.length>0) {  
      return res.status(200).send({

        status: "false",
        message: "allready User exist"
      }); 

       }else{
        const sql = "INSERT INTO worker VALUES ?";
  

  db.query(sql, [values], (err, results, fields) => {
    if (err) {
      return res.status(400).send({

        status: "false",
        message: err


      });
    }
    else {
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
        subject: "Iwait - Veryfication Link",
        html: `<a href="http://localhost:5000/api/emailverify/${email}">Click Here</a> to Reset Your Password`
      })

      return res.status(200).send({

        status: "Success",
        message: "Check your mail to verify user"


      });


    }

  })

       }
      
      })
  
  

  
};





exports.user = (req, res) => {

  const fullName = req.body.fullName;
  const contactNumber = req.body.contactNumber;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassw;
  const confirmEmail = req.body.confirmEmail;
  const category = req.body.category;


  const cripted_password = bcrypt.hashSync(password, 8)

  db.query("SELECT * FROM user WHERE email = ? ", [email], function (error, results, fields) {
    if (results.length>0) {  
      return res.status(200).send({

        status: "false",
        message: "allready User exist"
      }); 

       }else{
        const sql = "INSERT INTO user VALUES ?";
  const values = [[null, fullName, contactNumber, email, cripted_password, category, null, null,null]];

  db.query(sql, [values], (err, results, fields) => {
    if (err) {
      return res.status(400).send({

        status: "false",
        message: err


      });
    }
    else {
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
        subject: "Iwait - Veryfication Link",
        html: `<a href="http://localhost:5000/api/emailverify/${email}">Click Here</a> to Reset Your Password`
      })

      return res.status(200).send({

        status: "Success",
        message: "Check your mail to verify user"


      });


    }

  })

       }
      
      })
  


}
exports.emailverify = (req, res) => {
  var email = req.params['email'];
  var verify = true;
  db.query(`UPDATE user SET email_verify='1' WHERE email='${email}'`, function (error, results, fields) {

    if (error) {

      return res.status(400).send({

        status: "false",
        message: email


      });
    }
    else {
      
      return res.status(200).send({

        status: "Success",
        message: "User verified"


      });
    }
  })

}
exports.loginuser = (request, response) => {
  // Capture the input fields
  let email = request.body.email;
  let password = request.body.password;
  let usertype = request.body.usertype;

  db.query(`SELECT * FROM ${usertype} WHERE email = ? `, [email], function (error, results, fields) {
    if (results) {
      bcrypt.compare(password, results[0]?.password, function (err, result) {
        console.log('>>>>>> ', password)
        console.log('>>>>>> ', results)
        if (result) {
          let jwtSecretKey = process.env.JWT_SECRET_KEY;
          let data = {
            time: Date(),
            userId: results[0].id,
          
          }

          const token = jwt.sign(data, jwtSecretKey);

          //srequest.session.token = token;
          return response.status(200).send({

            status: "true",
            token: token,
            UserType:usertype,
      



          });
        }
        else {
          return response.status(400).send({
            status: "false",
            message: "Email or Password is not correct"

          });
        }
      })
    }
  });




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

exports.loginwithgoogle=(req,res)=>{
  var email=req.user.email;

console.log(req.user);
  // db.query("SELECT * FROM user WHERE email = ? ", [email], function (error, results, fields) {
  //   if (results>0) {
  //    res.send(results)
  //    }
  //   else {
  //     const sql = "INSERT INTO user VALUES ?";
  //     const values = [[null, req.user.displayName, null, req.user.email, null, null, null, null]];
    
  //     db.query(sql, [values], (err, results, fields) => {
  //       if (err) {
  //         console.log(err)
  //       }
  //       else{
  //         return res.status(200).send({
  //           status: "success full",
  //           message: req.user.email
    
  //         });
  //       }
  //     })
     
  //   }
  // })

  
}

exports.viewuser = (req, res) => {
  var sql="SELECT *FROM user"
  db.query(sql,function(error,result){
if(result){
  return res.status(200).send({
    status: "success",
    data:result 
  })

}
else{
  return res.status(400).send({
    status: "fail",
    message: "something is wrong"
  })
  
}

  })
}
exports.allworker=(req,res)=>{
  var sql="SELECT *FROM worker"
  db.query(sql,function(error,result){
if(result){
  return res.status(200).send({
    status: "success",
    data:result 
  })

}
else{
  return res.status(400).send({
    status: "fail",
    message: "something is wrong"
  })
  
}

  })
}

exports.singleuser = (req, res) => {
  let id=req.user.userId;
  var sql=`SELECT *FROM user WHERE id=${id}`
  db.query(sql,function(error,result){
if(result){
  return res.status(200).send({
    status: "success",
    data:result 
  })

}
else{
  return res.status(400).send({
    status: "fail",
    message: "something is wrong"
  })
  
}

  })
}







//update
exports.edit = (req, res) => {

  // var id=req.user.userId;
  const id=req.params['id'];
 
  var sql = `UPDATE user SET email = "${req.body.email}", fullName = "${req.body.fullName}", contactNumber = "${req.body.contactNumber}" WHERE id = "${id}"`
  db.query(sql, function (err, result) {
if(result){
  
  return res.status(200).send({
    status: "success",
    message: "User updated",
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
//delete
exports.deleteuser = (req, res) => {
const id=req.params['id'];
var sql=`DELETE FROM user WHERE id="${id}"`

db.query(sql,function(error,result){

if(result){
  return res.status(400).send({
    status: "success",
    message: "success full deleted"

  });

}
else{
  return res.status(400).send({
    status:"Fail",
    message:"fail to deleted"
  })

}

})




}
exports.deleteworker = (req, res) => {
  const id=req.params['id'];
  const usertype=req.body.userType;
  
  var sql=`DELETE FROM ${usertype} WHERE id=${id}`
  
  db.query(sql,function(error,result){
  
  if(result){
    return res.status(200).send({
      status: "success",
      message: "success full deleted"
  
    });
  
  }
  else{
    return res.status(400).send({
      status:"Fail",
      message:error
    })
  
  }
  
  })
  
  
  
  
  }

exports.profile=(req,res, next)=>{
var id=req.params['id'];
var profile=req.file.filename;
  var sql=`SELECT *FROM profile WHERE user_id="${id}"`
  db.query(sql,function(error,result){
  if(result.length>0){

    var filePath = `uploads/${result[0].profile}`; 
fs.unlinkSync(filePath);

    var sql2=`UPDATE profile SET profile="${profile}" WHERE user_id= "${id}"`;

    db.query(sql2,function(error,results){

res.send(req.file.filename)

    })
    


  }
  else{
    const sql = "INSERT INTO profile VALUES ?";
    const values = [[null,id, profile,null, null]];
  
    db.query(sql, [values], (err, results, fields) => {

      res.send(req.file)
    })
      
  }
 

  })

}

exports.deleteprofile=(req,res)=>{

  var id=req.params['id'];
  var sql2=`SELECT *FROM profile WHERE id= "${id}"`;
  db.query(sql2,function(error,results){

  
    var filePath = `uploads/${results[0].profile}`; 
    fs.unlinkSync(filePath);
      })
  var sql2=`DELETE FROM profile  WHERE id= "${id}"`;

  db.query(sql2,function(error,results){

res.send("deleted")

  })



}
