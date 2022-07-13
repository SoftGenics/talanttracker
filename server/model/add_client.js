const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    client_location:{type:String},
    client_industry:{type:String},
    client_spoc:{type:String},
    client_spoc_Mobile_number:{type:String},
    client_spoc_email_id:{type:String},
    client_GST:{type:String},
    client_type:{type:String},
    Agreed_signup_rate:{type:String},
    Agreed_payment_term:{type:String},
    Agreed_replacement_period:{type:String},
    Admin_remarks:{type:String},
    company_address:{
    type:String
    },
    listOfPreferredCompaniesSourceCandidate:{type:String},
    client_company_website:{type:String},
    client_company_linked_url:{type:String},
 company_size:{type:String}
})
const user=new mongoose.model('client',userSchema);
module.exports=user;