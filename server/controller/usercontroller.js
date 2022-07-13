
const signup = require('../model/user.model');
const rating = require('../model/rating');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const config = require("../config/auth.config");
let alert = require('alert');
const {AsyncLocalstorage}=require('async_hooks');



exports.profile=(req,res)=>{
const user=new usermodel({
   fname:req.body.fname,
	lname:req.body.lname,
	email:req.body.email,
	 phone:req.body.phone,
	 gender:req.body.gender,
	location:req.body.location,
  
      })
      user
      .save(user)
      .then(data=>{
          res.send(data)})
      .catch(err=>{
          res.status(500).send({
         message:err.message||'some err accur'});
   })
      }

      exports.findUser=(req,res)=>{
        signup.find().then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    






exports.user=(req,res)=>{

//date
let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  // current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let fulldate=(year + "-" + month + "-" + date);

    if(!req.body){
      res.status(400).send({message:"content can not be empty"});
        return;
    }
    signup.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      else
      {
      const  userId="UR-"+Math.floor(Math.random()*90000000)+10000000;
      const token = jwt.sign({ id:userId }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
        const user=new signup({
          userId:userId,
          firstname:req.body.firstname,
          lastname:req.body.lastname,
          email:req.body.email,
         
          gender:req.body.gender,
          cLocation:req.body.cLocation,
          countryCode:req.body.countryCode,
          number:req.body.number,
          password: bcrypt.hashSync(req.body.password, 8),
          date:fulldate,
          token:token
  
      })
      user
      .save(user)
      .then(data=>{
          res.send(data)})
      .catch(err=>{
          res.status(500).send({
         message:err.message||'some err accur'});
   })
      }
    
    });


}
exports.loginUser = asyncHandler(async (req, res) => {
  const date=new Date();
  let hours =date.getHours()-12;

// current minutes
let minutes =date.getMinutes();

// current seconds
let seconds =date.getSeconds();
const time=hours + ":" + minutes+":"+seconds
  const { email, password } = req.body

  // Check for user email
  const user = await signup.findOne({ email })


  if (user && (await bcrypt.compare(password, user.password))) {
   
   //res.redirect(`http://localhost:3000/Dashbaord/${user._id}`)
   
     const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
    
    
  
    req.session.token = token;
    return res.status(200).send({
      id: user.id,
      email: user.email,
      token: token,
      time:time

    });
    // res.json({
    //   _id: user.id,
      
    //   email: user.email,
    //   token: generateToken(user._id),
    // })
   
     res.cookie('mytoken',token,{
      httpOnly:true
   })
    
  } else {
    res.status(400)
  

    throw new Error('Invalid credentials')
  }
})
function redirectToHome(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "/home",
      "type": "GET",
      "headers": {
        "authorization": "Bearer " + getCookie('token'),
        "cache-control": "no-cache"
      }
    }
}

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
 exports.getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: "You've been signed out!"
    });
  } catch (err) {
    this.next(err);
  }
};
//userbyId
exports.userId=asyncHandler(async(req,res)=>{
 

const user = await signup.findById(req.params.id).then((data)=>{
  res.send(data)
}).catch((err)=>{
  res.send(err)
})

});



//view today
exports.todayUser=asyncHandler(async(req,res)=>{
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  // current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let fulldate=(year + "-" + month + "-" + date);

const user = await signup.find({"date":fulldate})

if (user){
  res.send(user)
} else {
  res.status(400)
  throw new Error('there is no record')
}

});
//view lastweek
exports.weakUser=asyncHandler(async(req,res)=>{
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  // current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let fulldate=(year + "-" + month + "-" + date);

const user = await signup.find({"createdAt" : { $gte : new Date(year,month,day,0,0,0).toISOString(), $lte:  new Date(year,month,day,23,59,59).toISOString() }})

if (user){
  
  res.send(user.email)
} else {
  res.status(400)
  throw new Error('there is no record')

}

});


//last month
exports.lastMonth=asyncHandler(async(req,res)=>{
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  // current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let fulldate=(year + "-" + month + "-" + date);

const user = await signup.find({"date":  { $lt: (fulldate) }} )

if (user){
  res.send(user)
} else {
  res.status(400)
  throw new Error('there is no record')

}





});

//view last years
exports.lastYear=asyncHandler(async(req,res)=>{
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  // current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let fulldate=(year + "-" + month + "-" + date);

const user = await signup.find({"date":  { $lt: (fulldate) }} )

if (user){
  res.send(user)
} else {
  res.status(400)
  throw new Error('there is no record')

}





});


//rating
exports.Rating=(req,res)=>{
  const user=new rating(req.body)
        user
        .save(user)
        .then(data=>{
            res.send(data)})
        .catch(err=>{
            res.status(500).send({
           message:err.message||'some err accur'});
     })
        }
  
        exports.findRating=(req,res)=>{
          rating.find().then((data)=>{
              res.send(data)
          }).catch((err)=>{
              console.log(err)
          })
      }









    // vidate request
//update
exports.update=(req,res)=>{

}
//delete
exports.delete=(req,res)=>
{

}
