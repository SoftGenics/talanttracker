const  mongoose = require('mongoose');
var schema = new mongoose.Schema({
   
condidate_id:{type:String
},
jd_number:{type:String
},
client_name:{type:String
},
jd_title:{type:String
},
jd_location:{type:String
},
recruiter_id:{type:String
},
condidate_name:{type:String

},
condidate_cdesignation:{type:String
},
condidate_csalary:{type:String
},
condidate_c:{type:String
},
c_fix:{type:String
},
c_variable:{type:String
},
current_salary:{type:String
},
ctotal_salary:{type:String
},
l_a_condidate:{type:String

},

expected_salary:{type:String},
experience:{type:String},
education:{
    type:String
},
c_oraganization:{
    type:String
},
c_location:{type:String},
c_mobile:{type:String},
notice_p:{type:String},
jdSendToCondidate:{type:String},
interviewTime:{type:String},

},

 {
    timestamps: true,
  }
)
const signup= mongoose.model('condidate',schema);
module.exports=signup;