
const signup = require('../model/admin.model');
const usermodel = require('../model/assignModel');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

exports.user=(req,res)=>{
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

        const user=new signup({
          userame:req.body.userame,

          email:req.body.email,
         
          
          password: bcrypt.hashSync(req.body.password, 8),
        
  
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
exports.loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await signup.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      
      email: user.email,
      token: generateToken(user._id),
      cookie:generateToken(user._id,{
        httpOnly:true
      })
    })
   const  token= generateToken(user._id)
    
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// const otpGenerator = require('otp-generator')

// exports.forget=(req,res)=>{
// const user=new signup({
//    otp:otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false })
// })
// user.save(user).then(data=>{
//   res.send(data)
// }).catch(err=>{
//   console.log(err)
// })
// }

// // @desc    Get user data
// // @route   GET /api/users/me
// // @access  Private
//  exports.getMe = asyncHandler(async (req, res) => {
//   res.status(200).json(req.user)
// })

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })}

    // vidate request
//update
exports.update=(req,res)=>{

}
//delete
exports.delete=(req,res)=>
{

}
