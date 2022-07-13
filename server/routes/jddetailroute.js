const express=require('express')
const router=express.Router()
const jddetailcontroller=require('../controller/jddetailcontroller')

router.post('/api/addJd',jddetailcontroller.uploadmultiple, jddetailcontroller.insertone)
router.get('/api/allJd', jddetailcontroller.getall)
router.get('/api/JdbyId/:id', jddetailcontroller.getone)
router.delete('/api/DJd/:id', jddetailcontroller.deleteone)
router.put('/api/editJd/:id', jddetailcontroller.updateone)


module.exports=router