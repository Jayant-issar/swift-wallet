//this is the main file of the backend routes it sends all the routes coming from the main index file to respected handler

const express = require('express');
const userRouter = require('./user') // importing userrouter from user.js
const router = express.Router();  // creating a router
const accountRouter = require('./accounts')


router.use('/user',userRouter) //sending all the requests to userRouter from the source "/user"
router.use('/accounts', accountRouter) // sending all the coming from the "/accounts" to accountRouter








//exporting the router
module.exports = router