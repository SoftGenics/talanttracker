const mongoose=require('mongoose')
const JDdetailSchema=new mongoose.Schema({
	clientId:{
		type:String,
		required:true
	},
	JDnumber:{
		type:String,
		default:"No"
	},

	company_name:{
		type:String,
		//default:"No"
	},
	
listofCompany:{
	type:String
},
linkendInUrl:{type:String},
client_signup_rate:{type:String},
replacement_priod:{type:String},

payment_terms:{type:String},
companyadress:{type:String},
industry:{type:String},
	
	companyType:{type:String},
	companySize:{type:String},
	ClientSpoc1Name:{type:String},
	ClientSpoc2Name:{type:String},
	ClientSpoc3Name:{type:String},
	ClientSpoc1Email:{type:String},
	ClientSpoc2Email:{type:String},
	ClientSpoc3Email:{type:String},
	ClientSpoc1MobileNumber:{type:String},
	ClientSpoc2MobileNumber:{type:String},
	ClientSpoc3MobileNumber:{type:String},
	ClientSpoc1Designation:{type:String},
	ClientSpoc2Designation:{type:String},
	ClientSpoc3Designation:{type:String},
	mobiledisclosed:{type:String},
	Clientcompanywebsite:{type:String},
	companynamedisclosed:{type:String},
	UserCategory:{type:String},
	ourdatabaseUsed:{type:String
	},

	exclusivity:{
		type:Number,
		//default:1
	},
	CVqualcheckreqbyAdmin:{
		type:String,
		//required:false
	},
	prioritytag:{
		type:String
	},
	JDuploadDate:{
		type:String,
	
	},
	JDuploadtime:{
		type:String,
		
	},
	JDdes:{
		type:String
		// required:true
	},
	JDtitle:{
		type:String,
	
	},
	SalaryBudget:{
		type:Number
	},
	education:{
		type:String
	},
	totalexperience:{
		type:Number
	},
	JDlocation:{
		type:String,
		
	},
	roundsofinterview:{
		type:String,
		
	},
	noticeperiodprefgivenbyclient:{
		type:String,
	
	},
	minnumcvsubm:{
		type:String,
		
		//default:3
	},
	allowonecandidatesubmbyuser:{
		type:String,
		
	},
	noofworkingdays:{
		type:String,
		
	},
	status:{
		type:String,
	
	},
	feedback:{type:String},
	rework:{
		type:String
	},
	noofvacancies:{
		type:String,
		
	},
	clientcoordtobedoneby:{
		type:String,
		
	},
	AssuredDeliveryReqByClient:{
		type:Date,
	
		default:Date.now()
	},
	remarks:{
		type:String
	},
	clientEmailListTo:{
		type:String
	},
	clientEmailListCC:{
		type:String
	},
	JDaudio:{
		type:String
	},
	percentpayoutforindifusetalenttrackerdatabase:{
		type:String
	},
	percentpayoutforconsulifusetalenttrackerdatabase:{
		type:String
	},
	percentpayoutforindifuseownportal:{
		type:String
	},
	percentpayoutforconsulifuseownportal:{
		type:String
	},
	abspayforindifusetalenttrackerdatabase:{
		type:String
	},
	abspayforconsulifusetalenttrackerdatabase:{
		type:String
	},
	abspayforindifuseownportal:{
		type:String
	},
	abspayforconsulifuseownportal:{
		type:String
	},
	preferredcompanyList:{
		type:String
	},
	// companyadress:{
	// 	type:String,
	
	// }
})
const JDdetail=new mongoose.model("JDdetail",JDdetailSchema)

module.exports=JDdetail