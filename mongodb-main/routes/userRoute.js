const express=require('express')
const userController=require('../controllers/usercontroller')
const router=express.Router()
router.post('/userRegister',userController.userRegister)
router.post('/userLogin',userController.userLogin)
module.exports=router