const express=require('express')
const router=express.Router()
const JDcontroller=require('../controller/JDcontroller')


router.get('/', JDcontroller.getallJD)
router.get('/:id', JDcontroller.getSingleJD)
router.post('/', JDcontroller.insertJD)
router.delete('/:id', JDcontroller.deleteJD)
router.patch('/:id', JDcontroller.updateJD)

module.exports=router