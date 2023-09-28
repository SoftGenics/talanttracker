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
route.post('/api/creatworker',controller.worker);
route.get('/api/worker',auth,controller.allworker);
route.post('/api/deleteworker/:id',auth,controller.deleteworker);

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


    