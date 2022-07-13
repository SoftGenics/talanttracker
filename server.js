
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser=require('body-parser');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const path = require('path');
const cors = require("cors");
const nodemailer=require("nodemailer");





const connectdb=require('./server/database/connection')
app.use(cookieParser());
app.use(express.json());
app.use(cors({origin:"*"}));
dotenv.config({path:'config.env'}
)
const PORT=process.env.PORT||8080


app.use('/static',express.static("image"))
//log request
app.use(morgan("tiny"));

connectdb();
// body parser
app.use(bodyparser.urlencoded({extended:true}))

app.use(
    cookieSession({
      name: "bezkoder-session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true
    }));

//send mail
let mailTransporter=nodemailer.createTransport({
    host:"smpt.gmail.com",
    port:465,
    secure:true,
    pool:true,
    auth:{
        user:"softgenics.prashant@gmail.com",
        pass:"Softgenics@123"
    },
})
let details={

    from:"softgenics.prashant@gmail.com",
    to:"mishra74881@gmail.com",
    subject:"testing our mail",
    text:"this is my testing mailmail"
}
mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("it has an error,err")
    }
    else{
        console.log("it has send");
    }
})















// set view engine
app.set("view engine","ejs")
app.use("views",express.static(path.join(__dirname,"/views")))
//load assets

app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/',require('./server/routes/router'))
app.use('/',require('./server/routes/AssignRoute'))
app.use('/',require('./server/routes/jddetailroute'))
app.use('/',require('./server/routes/userRoute'))
//app.use('/',require('./server/routes/auth.rout'))

app.listen(4000, () =>{console.log(`server is running on http://localhost:${PORT}`)});