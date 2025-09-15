const express = require('express')
const sendEmail = require('../controller/sendEmail')
const router =express.Router()

router
    .route("/sendEmail")
    .post(sendEmail)  
router
    .route("/")
    .get(res.send("Welcome to my portfolio follow the link https://anubhavpandey.netlify.app/ "))
module.exports=router 
