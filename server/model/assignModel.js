const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
	Category:{
		type:String
		// required:true
	},
	CVquailtyCheck:{
		type:String
		// required:true
	},
	numberOfJdInDay:{
		type:String
		// required:true
	},
	AmaxJDInDay:{
		type:Number
		// required:true
	},
	JDSowToUser:{
		type:String
		// required:true
	},
	designation:{
		type:String
		// required:true
	},
	SystemGenOfcEmail:{
		type:String
		// required:true
	},
	compulsion:{
		type:String
		// required:true
	},
	cMobileNum:{
		type:String
		// required:true
	},
	remarkByUser:{
		type:String
		// required:true
	},
	allowCSummission:{
		type:String
		// required:true
	},
	
	
})

const user=new mongoose.model("adminAssig", userSchema)

module.exports=user