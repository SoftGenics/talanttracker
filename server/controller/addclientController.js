const clientModel=require("../model/add_client")
const signup = require("../model/admin.model")
exports.addClient=(req,res)=>{
    const user=new clientModel(req.body)
    user.save(user).then(data=>{
        res.send(data)})
    .catch(err=>{
        res.status(500).send({
       message:err.message||'some err accur'});
 })
}

exports.findAllclient=(req,res)=>{
    clientModel.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
}
exports.deleteclient=(req,res)=>{
    clientModel.findByIdAndDelete(req.params.id).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })  
}

exports.editClient=(req,res)=>{
    const _id=req.params.id;
    console.log(_id)
    const editfield={
        "client_id":req.body.client_id,
        "client_name":req.body.client_name,
        "client_location":req.body.client_location,
        "client_industry":req.body.client_industry,
       " client_spoc":req.body.client_spoc,
       " client_spoc_Mobile_number":req.body.client_spoc_Mobile_number,
        "client_spoc_email_id":req.body.client_spoc_email_id,
       " client_GST":req.body.client_GST,
        "client_type":req.body.client_type,
       " Agreed_signup_rate":req.body.Agreed_signup_rate,
       " Agreed_payment_term":req.body.Agreed_payment_term,
       " Agreed_replacement_period":req.body.Agreed_replacement_period,
       " Admin_remarks":req.body.Admin_remarks,
       " company_address":req.body.company_address
    }
    clientModel.findByIdAndUpdate(_id,editfield, function(err, result){
  
      if(err){
          res.send(err)
      }
      else{
          res.send(result)
      }
  
  })
  
  }
  