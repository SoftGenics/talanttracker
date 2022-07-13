const usermodel = require('../model/assignModel');



exports.AdminAssign=(req,res)=>{
    const user=new usermodel({
      Category:req.body.Category,

      CVquailtyCheck:req.body.CVquailtyCheck,
      numberOfJdInDay:req.body.numberOfJdInDay,
      AmaxJDInDay:req.body.AmaxJDInDay,
      JDSowToUser:req.body.JDSowToUser,
      designation:req.body.designation,
      SystemGenOfcEmail:req.body.SystemGenOfcEmail,
      compulsion:req.body.compulsion,
      cMobileNum:req.body.cMobileNum,
      remarkByUser:req.body.remarkByUser,
      allowCSummission:req.body.allowCSummission,
    })
    user
    .save(user)
    .then(data=>{
        res.send(data)})
    .catch(err=>{
        res.status(500).send({
       message:err.message||'some err accur'});
 })

}

exports.EditAssign=(req,res)=>{
  const _id=req.params.id;
  console.log(_id)
  const editfield={ "Category":req.body.Category,

    "CVquailtyCheck":req.body.CVquailtyCheck,
    "numberOfJdInDay":req.body.numberOfJdInDay,
    "AmaxJDInDay":req.body.AmaxJDInDay,
    "JDSowToUser":req.body.JDSowToUser,
    "designation":req.body.designation,
    "ystemGenOfcEmail":req.body.SystemGenOfcEmail,
    "compulsion":req.body.compulsion,
    "cMobileNum":req.body.cMobileNum,
    "remarkByUser":req.body.remarkByUser,
    "allowCSummission":req.body.allowCSummission,
    
  "recruiter_id":req.body.recruiter_id,
  
  "condidate_name":req.body.condidate_name,}
  usermodel.findByIdAndUpdate(_id,editfield, function(err, result){

    if(err){
        res.send(err)
    }
    else{
        res.send(result)
    }

})

}


exports.findUser=(req,res)=>{
  const user = usermodel.find()
    if (user){
        res.send(user)
      } else {
        res.status(400)
        throw new Error('there is no record')
      }
    

}