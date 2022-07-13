const mongoose=require('mongoose')

const JDSchema=new mongoose.Schema({
    category:{type:String},
      userId:{type:String},
      date:{type:String},
      rparamiter:{type:String},
      rating:{type:String},
})


const JDList=new mongoose.model("rating", JDSchema)


module.exports=JDList