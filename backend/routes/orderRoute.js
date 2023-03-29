const express = require('express');
const router = express.Router()
const {addOrderItems,getOrderById} =require ('../Controllers/orderController.js')
const { protectSimpleUser,validator,isAdmin }= require('../Middelware/userMiddelware.js')


router.post('/',protectSimpleUser,addOrderItems)
router.get('/:id',protectSimpleUser,getOrderById)

module.exports = router