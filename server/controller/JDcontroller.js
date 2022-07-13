const JD=require('../models/ListJD')



exports.getallJD=(req,res)=>{
	JD.find().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.insertJD=(req,res)=>{

	const jd=new JD(req.body)
	jd.save().then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}


exports.getSingleJD=(req,res)=>{
	// conole.log(req.params.id)
	JD.findById(req.params.id).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}

exports.deleteJD=(req,res)=>{
	JD.findByIdAndDelete(req.params.id).then((data)=>{
		res.send(data)
		}).catch((err)=>{
			res.send(err)
	})
}


exports.updateJD=(req,res)=>{
	const status=req.body.status
	const clientDetails=req.body.clientDetails
	const JDdetails=req.body.JDdetails
	const specialcommbyAdmin=req.body.specialcommbyAdmin
	const termofJD=req.body.termofJD
	const mypayout=req.body.mypayout
	const JDdesc=req.body.JDdesc
	const AssuredDeliveryReqByClient=req.body.AssuredDeliveryReqByClient
	const clientcoordtobedoneby=req.body.clientcoordtobedoneby
	const CVqualcheckreqbyAdmin=req.body.CVqualcheckreqbyAdmin
	const Lockforme=req.body.Lockforme
	JD.findByIdAndUpdate({_id:req.params.id}, {
		$set:{
			status:status, clientDetails:clientDetails, JDdetails:JDdetails, specialcommbyAdmin:specialcommbyAdmin,
			termofJD:termofJD, mypayout:mypayout, JDdesc:JDdesc, /*AssuredDeliveryReqByClient:AssuredDeliveryReqByClient,*/
			clientcoordtobedoneby:clientcoordtobedoneby, clientcoordtobedoneby:clientcoordtobedoneby, CVqualcheckreqbyAdmin:
			CVqualcheckreqbyAdmin, Lockforme:Lockforme
		}
	}).then((data)=>{
		// console.log(data)
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
}