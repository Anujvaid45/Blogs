const express = require('express')
const router = express.Router()
const {requireSignIn,isAdmin} = require('../middleware/authMiddleware.js')
//controller functions
const {registerController,loginController} = require('../controller/authController.js')

//routing 
//register
router.post('/register',registerController)

//login
router.post('/login',loginController)



module.exports = router

