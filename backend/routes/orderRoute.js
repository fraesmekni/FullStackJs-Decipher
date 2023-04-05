const express = require('express');
const router = express.Router()
const {addOrderItems,getOrderById,updateOrderToPaid, getOrders} =require ('../Controllers/orderController.js')
const { protectSimpleUser,validator,isAdmin }= require('../Middelware/userMiddelware.js')


router.post('/',protectSimpleUser,addOrderItems)
router.get('/:id',protectSimpleUser,getOrderById)
router.put('/:id/pay',protectSimpleUser,updateOrderToPaid)
router.get('/getAll/:id',protectSimpleUser,getOrders)

module.exports = router