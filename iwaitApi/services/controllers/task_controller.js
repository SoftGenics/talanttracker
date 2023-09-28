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

exports.createtask = (req, res) => {
  const id=req.user.userId;
console.log(req.body)  
    const booker_id = id;
    const date = req.body.date;
    const title = req.body.title;
    const dic = req.body.dic;
    const start_time = req.body.timeStart;
    const timeEnd = req.body.timeEnd;
    const price = req.body.price;
    const lat = req.body.lat;
    const lng = req.body.lng;
    
    
  
          const sql = "INSERT INTO task VALUES ?";
    const values = [[null,booker_id,title,dic,date, start_time, timeEnd, price,lat, lng,null]];
  
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



        exports.gettask=(req,res)=>{

          var sql="SELECT *FROM task ORDER BY id DESC";
          db.query(sql,function(err,results,next){
            console.log(results);
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
        exports.gettaskbyme=(req,res)=>{
          const booker_id=req.user.userId;
          var sql=`SELECT *FROM task WHERE booker_id=${booker_id} ORDER BY id DESC`;
          db.query(sql,function(err,results,next){
            console.log(results);
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
        exports.taskreport = (req, res) => {
          const booker_id = req.user.userId;
        
          // Assuming "worker_id" is the common column linking the "worker" and "task" tables
          var sql = `
            SELECT 
            *FROM task t
           
            WHERE t.booker_id = ${booker_id}
            ORDER BY t.id DESC
          `;
        
          db.query(sql, function(err, results, next) {
            if (err) {
              console.error(err);
              return res.status(500).send({
                status: "error",
                message: "Something went wrong with the database query."
              });
            }
        
            if (results.length > 0) {
              return res.status(200).send({
                status: "success",
                data: results
              });
            } else {
              return res.status(404).send({
                status: "fail",
                message: "No tasks found for the given booker_id."
              });
            }
          });
        };
        
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

exports.accepttask=(req,res)=>{
  const id=req.user.userId;
  var taskid=req.body.task_id
  const user_id=id;
 const  task_id=taskid;
 const status="panding"

 var sql=`SELECT *FROM accept_task WHERE task_id='${taskid}'`;
          db.query(sql,function(err,results,next){

            if(results.length>0){
              return res.status(400).send({
                status:"error",
                message: "Someone accepted this task"

              })

            }else{

              const sql2 = "INSERT INTO accept_task VALUES ?";
              const values = [[null,user_id,task_id, status]];
            
              db.query(sql2, [values], (err, result, fields) => {
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


exports.taskdone=(req,res)=>{
 
 var taskid=req.params['id'];
 var sql=`UPDATE accept_task SET completed_status='completed' WHERE task_id=${taskid}`;
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
    

exports.done=(req,res)=>{
  var id=req.user.userId;
  var sql=`SELECT task.*, accept_task.*
  FROM task
  INNER JOIN accept_task ON task.id = accept_task.task_id WHERE accept_task.user_id='${id}'`;
          db.query(sql,function(err,results,next){
console.log(results)
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
exports.accepttaskview=(req,res)=>{
  var id=req.user.userId;
  var sql=`SELECT task.*, accept_task.*
  FROM task
  INNER JOIN accept_task ON task.id = accept_task.task_id WHERE task.booker_id='${id}'`;
          db.query(sql,function(err,results,next){
console.log(results)
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

  
  