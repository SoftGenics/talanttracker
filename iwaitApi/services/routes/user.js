const express =require('express');
const route=express.Router();
const auth=require('../middleware/auth');

const multer  = require('multer')

var session = require('express-session');
//const RedisStore  = require( 'connect-redis' )( session )
const path = require('path');

var fs= require('fs');
const passport=require('passport');
require('../passport/passport-setup');

const controller = require("../controllers/user");
const { verify } = require('crypto');
route.use( session({ 
	secret: 'cookie_secret',
	name:   'kaas',
	proxy:  true,
    resave: false,
    saveUninitialized: true
}));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
  });
  
  const upload = multer({ storage: storage });

route.use(passport.initialize())
route.use(passport.session());
route.post('/api/createuser',controller.user);
route.post('/api/login',controller.loginuser);
route.get('/api/emailverify/:email',controller.emailverify);
route.post('/api/forget',controller.forget);
route.post('/api/verifyotp/:id',controller.verify);
route.post('/api/newpassword',auth,controller.newpassword)
route.get('/api/user',auth,controller.viewuser);
route.get('/api/singleuser',auth,controller.singleuser);


route.put('/api/edituser/:id',auth,controller.edit);
route.delete('/api/deleteuser/:id',auth,controller.deleteuser);
route.post('/api/profile/:id', upload.single('avatar'), controller.profile)
route.delete('/api/deleteprofile/:id', upload.single('avatar'), controller.deleteprofile)

route.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
       
));
 
route.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

route.get('/auth/google/success', controller.loginwithgoogle);
     module.exports = route


    route.get('/api/user-verify',auth,controller.user_verify)