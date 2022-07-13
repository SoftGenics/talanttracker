

const multer = require('multer')
const JDdetail=require('../model/JDdetails')

var storage=multer.diskStorage({
	destination:"images",
	filename:(req,file,cd)=>{
		cd(null,file.fieldname+"_"+Date.now()+file.originalname);
	}
});
var upload=multer({storage:storage});
exports.uploadmultiple=upload.fields([{name:'JDdes'},{name:'jdaudio'}])
exports.insertone=(req, res)=>{
	const jddetail=new JDdetail({  //clientId:req.body.clientId,
	
		//JDnumber:req.body.JDnumber,
		company_name:req.body.company_name,
	// listofCompany:req.body.listofCompany,
	 
	// linkendInUrl:req.body.linkendInUrl,
	// client_signup_rate: req.body.client_signup_rate, 
	// replacement_priod:req.body.replacement_priod,
	
	// payment_terms:req.body.payment_terms,
	// companyadress:req.body.companyadress,
	// industry:req.body.industry,
	 UserCategory:req.body.UserCategory, 	
		// companyType:req.body.companyType,
		// companySize:req.body.companySize, 
		// ClientSpoc1Name:req.body.ClientSpoc1Name,
		// ClientSpoc2Name:req.body.ClientSpoc2Name,
		// ClientSpoc3Name:req.body.ClientSpoc3Name, 
		// ClientSpoc1Email:req.body.ClientSpoc1Email,
		// ClientSpoc2Email:req.body.ClientSpoc2Email,
		// ClientSpoc3Email:req.body.ClientSpoc3Email,
		// ClientSpoc1MobileNumber:req.body.ClientSpoc1MobileNumber,
		// ClientSpoc2MobileNumber:req.body.ClientSpoc2MobileNumber ,
		// ClientSpoc3MobileNumber:req.body.ClientSpoc3MobileNumber,
		// ClientSpoc1Designation:req.body.ClientSpoc1Designation,
		// ClientSpoc2Designation:req.body.ClientSpoc2Designation ,
		// ClientSpoc3Designation:req.body.ClientSpoc3Designation,
		// mobiledisclosed:req.body.mobiledisclosed,
		// Clientcompanywebsite:req.body.Clientcompanywebsite ,
		// companynamedisclosed:req.body.companynamedisclosed, 
		
		// ourdatabaseUsed:req.body.ourdatabaseUsed,
		 
	
		// exclusivity:req.body.exclusivity,  
			
		 
		// CVqualcheckreqbyAdmin:req.body.CVqualcheckreqbyAdmin,
		 
		// prioritytag:req.body.prioritytag,
		 
		// JDuploadDate:req.body.JDuploadDate,
		
		 
		// JDuploadtime:req.body.JDuploadtime,
			
		 
		// JDdes:req.file?.filename,
		 
		// JDtitle:req.body.JDtitle,
		
		 
		// SalaryBudget:req.body.SalaryBudget,
		 
		// education:req.body.education,
		 
		// totalexperience:req.body.totalexperience,	 
		// JDlocation:req.body.JDlocation,
			
		 
		// roundsofinterview:req.body.roundsofinterview,
			
		 
		// noticeperiodprefgivenbyclient:req.body.noticeperiodprefgivenbyclient,
		
		 
		// minnumcvsubm:req.body.minnumcvsubm,
		// allowonecandidatesubmbyuser:req.body.allowonecandidatesubmbyuser,
			
		 
		// noofworkingdays:req.body.noofworkingdays,
			
		 
		// status:req.body.status,
		
		 
		// feedback:req.body.feedback,
		// rework:req.body.rework,
		 
		// noofvacancies:req.body.noofvacancies,
			
		 
		// clientcoordtobedoneby:req.body.clientcoordtobedoneby,
		// remarks:req.body.remarks,
		 
		// clientEmailListTo:req.body.clientEmailListTo,
		 
		// clientEmailListCC:req.body.clientEmailListCC,
		 
		// JDaudio:req.file?.filename,
		 
		// percentpayoutforindifusetalenttrackerdatabase:req.body.percentpayoutforconsulifusetalenttrackerdatabase,
		 
		// percentpayoutforconsulifusetalenttrackerdatabase:req.body.percentpayoutforconsulifuseownportal,
		 
		// percentpayoutforindifuseownportal:req.body.percentpayoutforindifuseownportal,
		 
		// // percentpayoutforconsulifuseownportal:req.body.percentpayoutforconsulifuseownportal.percentpayoutforconsulifuseownportal,
		// abspayforindifusetalenttrackerdatabase:req.body.abspayforindifusetalenttrackerdatabase,
		// abspayforconsulifusetalenttrackerdatabase:req.body.abspayforconsulifusetalenttrackerdatabase,
		 
		// abspayforindifuseownportal:req.body.abspayforindifuseownportal,
		// abspayforconsulifuseownportal:req.body.abspayforconsulifuseownportal,
		// preferredcompanyList:req.body.preferredcompanyList
	
		})
	jddetail.save().then((data)=> {
		res.send(data)
	}).catch((err)=>  { 
		res.send(err)
	})
}


exports.getall=(req, res)=>{
	JDdetail.find().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}



exports.getone=(req, res)=>{
	const id=req.params.id
	JDdetail.findById(id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.deleteone=(req, res)=>{
	const id=req.params.id
	JDdetail.findByIdAndDelete(id).then((data)=>{
		const myobj={
			data:data,
			msg:"deleted"
		}
		res.send(myobj)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.updateone=(req, res)=>{
	const id=req.params.id
	const clientId=req.body.clientId
	const company_name=req.body.company_name
	const listofCompany=req.body.listofCompany
	 
	const linkendInUrl=req.body.linkendInUrl
	const client_signup_rate=req.body.client_signup_rate 
	const replacement_priod=req.body.replacement_priod
	const JDnumber=req.body.JDnumber
	const payment_terms=req.body.payment_terms
	const companyadress=req.body.companyadress
	const industry=req.body.industry
	const AssuredDeliveryReqByClient=req.body.AssuredDeliveryReqByClient
		const percentpayoutforconsulifuseownportal=req.body.percentpayoutforconsulifuseownportal
	const companyType=req.body.companyType
	const companySize=req.body.companySize 
	const	ClientSpoc1Name=req.body.ClientSpoc1Name
	const	ClientSpoc2Name=req.body.ClientSpoc2Name
	const	ClientSpoc3Name=req.body.ClientSpoc3Name 
	const	ClientSpoc1Email=req.body.ClientSpoc1Email
	const	ClientSpoc2Email=req.body.ClientSpoc2Email
	const	ClientSpoc3Email=req.body.ClientSpoc3Email
	const	ClientSpoc1MobileNumber=req.body.ClientSpoc1MobileNumber
	const	ClientSpoc2MobileNumber=req.body.ClientSpoc2MobileNumber 
	const		ClientSpoc3MobileNumber=req.body.ClientSpoc3MobileNumber
	const	ClientSpoc1Designation=req.body.ClientSpoc1Designation
	const	ClientSpoc2Designation=req.body.ClientSpoc2Designation 
	const	ClientSpoc3Designation=req.body.ClientSpoc3Designation
	const	mobiledisclosed=req.body.mobiledisclosed
	const	Clientcompanywebsite=req.body.Clientcompanywebsite 
	const	companynamedisclosed=req.body.companynamedisclosed 
	const	UserCategory=req.body.UserCategory 
	const	ourdatabaseUsed=req.body.ourdatabaseUsed
		 
	
	const	exclusivity=req.body.exclusivity  
			
		 
	const	CVqualcheckreqbyAdmin=req.body.CVqualcheckreqbyAdmin
		 
	const	prioritytag=req.body.prioritytag
		 
	const	JDuploadDate=req.body.JDuploadDate
		
		 
	const	JDuploadtime=req.body.JDuploadtime
			
		 
	//const	JDdes=req.file?.filename
		 
	const	JDtitle=req.body.JDtitle
		
		 
	const	SalaryBudget=req.body.SalaryBudget
		 
	const	education=req.body.education
		 
	const	totalexperience=req.body.totalexperience	 
	const	JDlocation=req.body.JDlocation
			
		 
	const	roundsofinterview=req.body.roundsofinterview
			
		 
	const	noticeperiodprefgivenbyclient=req.body.noticeperiodprefgivenbyclient
		
		 
	const	minnumcvsubm=req.body.minnumcvsubm
	const	allowonecandidatesubmbyuser=req.body.allowonecandidatesubmbyuser
			
		 
	const	noofworkingdays=req.body.noofworkingdays
			
		 
	const	status=req.body.status
		
		 
	const	feedback=req.body.feedback
	const	rework=req.body.rework
		 
	const	noofvacancies=req.body.noofvacancies
			
		 
	const	clientcoordtobedoneby=req.body.clientcoordtobedoneby
	const	remarks=req.body.remarks
		 
	const	clientEmailListTo=req.body.clientEmailListTo
		 
	const clientEmailListCC=req.body.clientEmailListCC
		 
	const	JDaudio=req.body.JDaudio
		 
	const	percentpayoutforindifusetalenttrackerdatabase=req.body.percentpayoutforconsulifusetalenttrackerdatabase
		 
	const	percentpayoutforconsulifusetalenttrackerdatabase=req.body.percentpayoutforconsulifuseownportal
		 
	const	percentpayoutforindifuseownportal=req.body.percentpayoutforindifuseownportal
		 
		// percentpayoutforconsulifuseownportal=req.body.percentpayoutforconsulifuseownportal.percentpayoutforconsulifuseownportal
		const	abspayforindifusetalenttrackerdatabase=req.body.abspayforindifusetalenttrackerdatabase
		const	abspayforconsulifusetalenttrackerdatabase=req.body.abspayforconsulifusetalenttrackerdatabase
		 
		const	abspayforindifuseownportal=req.body.abspayforindifuseownportal
		const	 abspayforconsulifuseownportal=req.body.abspayforconsulifuseownportal
		const	preferredcompanyList=req.body.preferredcompanyList
	

	JDdetail.findByIdAndUpdate({_id:id}, {
		$set:{
			clientId:clientId,
			JDnumber:JDnumber,
		
			company_name:company_name,
			
		listofCompany:listofCompany,
		linkendInUrl:linkendInUrl,
		client_signup_rate:client_signup_rate,
		replacement_priod:replacement_priod,
		
		payment_terms:payment_terms,
		companyadress:companyadress,
		industry:industry,
			
			companyType:companyType,
			companySize:companySize,
			ClientSpoc1Name:ClientSpoc1Name,
			ClientSpoc2Name:ClientSpoc2Name,
			ClientSpoc3Name:ClientSpoc3Name,
			ClientSpoc1Email:ClientSpoc1Email,
			ClientSpoc2Email:ClientSpoc2Email,
			ClientSpoc3Email:ClientSpoc3Email,
			ClientSpoc1MobileNumber:ClientSpoc1MobileNumber,
			ClientSpoc2MobileNumber:ClientSpoc2MobileNumber,
			ClientSpoc3MobileNumber:ClientSpoc3MobileNumber,
			ClientSpoc1Designation:ClientSpoc1Designation,
			ClientSpoc2Designation:ClientSpoc2Designation,
			ClientSpoc3Designation:ClientSpoc3Designation,
			mobiledisclosed:mobiledisclosed,
			Clientcompanywebsite:Clientcompanywebsite,
			companynamedisclosed:companynamedisclosed,
			UserCategory:UserCategory,
			ourdatabaseUsed:ourdatabaseUsed,
		
			exclusivity:exclusivity,
			CVqualcheckreqbyAdmin:CVqualcheckreqbyAdmin,
			prioritytag:prioritytag,
			JDuploadDate:JDuploadDate,
			JDuploadtime:JDuploadtime,
			//JDdes:JDdes,
			JDtitle:JDtitle,
			SalaryBudget:SalaryBudget,
			education:education,
			totalexperience:totalexperience,
			JDlocation:JDlocation,
			roundsofinterview:roundsofinterview,
			noticeperiodprefgivenbyclient:noticeperiodprefgivenbyclient,
			minnumcvsubm:minnumcvsubm,
			allowonecandidatesubmbyuser:allowonecandidatesubmbyuser,
			noofworkingdays:noofworkingdays,
			status:status,
			feedback:feedback,
			rework:rework,
			noofvacancies:noofvacancies,
			clientcoordtobedoneby:clientcoordtobedoneby,
			AssuredDeliveryReqByClient:AssuredDeliveryReqByClient,
			remarks:remarks,
			clientEmailListTo:clientEmailListTo,
			clientEmailListCC:clientEmailListCC,
			JDaudio:JDaudio,
			percentpayoutforindifusetalenttrackerdatabase:percentpayoutforindifusetalenttrackerdatabase,
			percentpayoutforconsulifusetalenttrackerdatabase:percentpayoutforconsulifusetalenttrackerdatabase,
			percentpayoutforindifuseownportal:percentpayoutforindifuseownportal,
			percentpayoutforconsulifuseownportal:percentpayoutforconsulifuseownportal,
			abspayforindifusetalenttrackerdatabase:abspayforindifusetalenttrackerdatabase,
			abspayforconsulifusetalenttrackerdatabase:abspayforconsulifusetalenttrackerdatabase,

			abspayforindifuseownportal:abspayforindifuseownportal,
			abspayforconsulifuseownportal:abspayforconsulifuseownportal,
			preferredcompanyList:preferredcompanyList,
		 companyadress:companyadress
		}
	}).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


