const express = require('express')
const sendEmail = require('../controller/sendEmail')
const router =express.Router()

router
    .route("/sendEmail")
    .post(sendEmail)    
module.exports=router 