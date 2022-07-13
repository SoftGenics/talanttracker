const e = require('express')
const invoiceModel=require('../model/invoiceModel')

exports.addInvoice=(req,res)=>{
    const user=new invoiceModel(req.body)
    user.save(user).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:err.message||'some err accur'});
    })

}

//edit


exports.EditAssign=(req,res)=>{
    const _id=req.params.id;
    console.log(_id)
    const editfield={ }
    usermodel.findByIdAndUpdate(_id,editfield, function(err, result){
  
      if(err){
          res.send(err)
      }
      else{
          res.send(result)
      }
  
  })
  
  }
  exports.findInvoice=(req,res)=>{
    invoiceModel.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
  }
  
  exports.deleteInvoice=(req,res)=>{
    invoiceModel.findByIdAndDelete(req.params.id).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
  }

  
  
