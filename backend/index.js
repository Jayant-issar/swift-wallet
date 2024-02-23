// this the main baclend file
const express = require("express");
const app = express()
const rootrouter = require('./routes/index') // importing the root router from main manager file of the routes
const cors = require('cors');



app.use(cors()) // enabling the cors middleware to ensure cross origin resource sharing
app.use(express.json()) //enabling the json middleware to make sure we are able to parse through the json data without fail




// routing all the incoming requests t0 root router
app.use('/api/v1/',rootrouter)




app.listen(3000,()=>{
    console.log('the backend is listening at the port 3000');
})

