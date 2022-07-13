const  mongoose = require('mongoose');
var schema = new mongoose.Schema({
   email:{type:String},

username:{type:String
},
password:{type:String
},


}, {
    timestamps: true,
  }
)
const signup= mongoose.model('adminSignUp',schema);
module.exports=signup;