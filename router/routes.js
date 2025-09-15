const express = require('express')
const sendEmail = require('../controller/sendEmail')
const router =express.Router()

router
    .route("/sendEmail")
    .post(sendEmail)  
router
  .route("/")
  .get((req, res) => {
    res.send("Welcome to my portfolio! Follow the link: https://anubhavpandey.netlify.app/");
  });
module.exports=router 
