const  mongoose = require('mongoose');
var schema = new mongoose.Schema({
   userId:{type:String},
firstname:{type:String
},
lastname:{type:String
},
email:{type:String
},
password:{type:String
},
gender:{type:String
},
cLocation:{type:String
},
countryCode:{type:String

},
number:{type:String
},
date:{type:String
},
Acategory:{
  type:String,
  default:"C"
  // required:true
},
Aemail:{
  type:String,
 
},
Adefpassword:{
  type:String,
},
AmaxJDinaday:{
  type:Number,
  default:"1"
},
ACVqualityCheck:{
  type:String,
  default:"yes"
},
AJDprivilege:{
  type:String,
  default:"No"
  // required:true
},
Adesignation:{
  type:String
  // required:true
},
Armvmobno:{
  type:String,
  default:"Don't Allow"
  // required:true
},
Awrite:{
  type:String,
  default:"Don't Allow"
  // required:true
},
JdDetailCheck:{
  type:String,
  default:"Yes"
},
ComUsedOnDatabase:{type:String,
    default:"No compulsion"},
Aonecandidatesubm:{
  type:String,
  default:"No"
  // required:true
},
Aupdtstatus:{
  type:String,
  default:"Yes"
  // required:true
},

Aclientcoord:{
  type:String
  // required:true
},
AmaxNolockinaday:{
  type:Number,
  default:25
  // required:true
},
colortype:{type:String,
  default:'rgb(230, 217, 25)'},

PIfirstname:{
  type:String
  // required:true
},
PIlastname:{
  type:String
  // required:true
},

PIemail:{
  type:String,
  unique:true
  // required:true
},
PIphone:{
  type:Number
  // required:true
},
PIgender:{
  type:String
  // required:true
},
PIcurrlocation:{
  type:String
  // required:true
},
WIHighestQualification:{
  type:String
},
WIGraduation:{
  type:String
},
WIdob:{
  type:Date,
  default:Date.now
},
WIlanguages:{
  type:String
},
WIaadhar:{
  type:String
},
WIrecexp:{
  type:Number
},
WIpref:{
  type:String,
  default:"Non IT"
},
WIcurrempstatus:{
  type:String,
  default:"Open"
},
WIInd_Or_Consul:{
  type:String,
  default:"Individual"
},
WIOwnportalavailable:{
  type:String,
  default:"No"
},
WIOwnportal:{
  type:String,
  default:"None"
},
WIPrefInd:{
  type:String,
  default:"No"
},
WIHandleJD:{
  type:String,
  default:"regional"
},
BDNameofbank:{
  type:String
},
BDbranchloc:{
  type:String
},
BDnameasba:{
  type:String
},
BDphone:{
  type:Number
},
BDaccno:{
  type:Number
},
BDIFSC:{
  type:String
},
BDacctype:{
  type:String
},
BDadress:{
  type:String
},
client_spoc_mob_no_tobe_shown_to_thisuser:{
  type:String,
  default:"Yes"
},
fixedpayout:{
  type:Number
},
token:{type:String}


}, {
    timestamps: true,
  }
)
const signup= mongoose.model('userSignUp',schema);
module.exports=signup;

