const mongoose=require('mongoose')

const JDSchema=new mongoose.Schema({
	status:{
		type:String,
		required:true
	},
	JDNo:{
		type:Number,
		required:true
	},
	JDuploadDT:{
		type:Date,
		required:true,
		default:Date.now
	},
	clientDetails:{
		type:String,
		required:true
	},
	JDdetails:{
		type:String,
		required:true,
		default:true
	},
	specialcommbyAdmin:{
		type:String
		// required:true
	},
	termofJD:{
		type:String,
		required:true
	},
	mypayout:{
		type:Number,
		required:true
	},
	JDdesc:{
		type:String
	},
	AssuredDeliveryReqByClient:{
		type:Date,
		required:true,
		default:Date.now()
	},
	clientcoordtobedoneby:{
		type:String,
		required:true
	},
	Lockforme:{
		type:String,
		required:true
	}
})


const JDList=new mongoose.model("JDList", JDSchema)


module.exports=JDList