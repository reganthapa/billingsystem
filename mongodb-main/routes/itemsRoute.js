const express=require('express')
const itemsController=require('../controllers/itemsController')
const router=express.Router()
router.get('/getallitems',itemsController.getAllItems)
router.post('/add-item',itemsController.addnewitems)
router.get('/edit/:_id',itemsController.getedititems)
router.post('/update',itemsController.postupdateitems)
router.post('/deleteitem/:_id',itemsController.postdeleteitems)
module.exports=router
