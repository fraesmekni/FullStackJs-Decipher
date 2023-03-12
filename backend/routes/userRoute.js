const express = require('express')
const router = express.Router()
const {
    registerUser,
    verifyEmail,
    logIn,
    reset,
    forgetPass,
    updateUser,
    findUserById,
    getAllUser,
    ApproveUser

} = require('../Controllers/userController.js')

const { protectSimpleUser,validator,isAdmin }= require('../Middelware/userMiddelware.js')

router.post('/register',registerUser)
router.post('/verify-email',verifyEmail)
router.post('/verify-email/:token',verifyEmail)
router.post('/login',logIn)
router.post('/forget-password',forgetPass)
router.post('/reset-password',validator,reset)
router.put('/updateUser/:id',protectSimpleUser,updateUser)
router.get('/getuser/:id',protectSimpleUser,findUserById)
router.get('/getalluser',getAllUser)
router.put('/approve/:id',ApproveUser)


//router.get('/test',protectSimpleUser,test)

module.exports = router