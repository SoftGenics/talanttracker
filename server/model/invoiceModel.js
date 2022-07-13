const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    InvoiceNumber:{type:String},
    InvoiceDate:{type:String},
    
    UserID:{type:String},
    CandidateID:{type:String},
    JDNumber:{type:String},
    ClientID:{type:String},
    ClientName:{type:String},
    ClientAddress1:{type:String},
   
    ClientAddress2:{type:String},
    City:{type:String},
    
    State:{type:String},
    ClientGST:{type:String},
    Kindattn:{type:String},
    CandidateName:{type:String},
    Designation:{type:String},
    SignUpRate:{type:String},
    DateOfJoining:{type:String},
   
    CTC:{type:String},
    InvoiceBaseValue:{type:String},
    Subtotal:{type:String},
    CGST:{type:String},
    IGST:{type:String},
    SGST:{type:String},
    TotalInvoiceValue:{type:String},
    AmountInWords:{type:String},
})
const user=new mongoose.model('invoice',userschema)
module.exports=user;