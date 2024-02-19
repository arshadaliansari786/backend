const express = require("express")
const cors = require("cors")



const app  = express()
require( "./dbConnection/connection" )
app.use(cors())//this will enable cross origin resource sharing from any origins for all routes and methods
app.use(express.json()); // This middleware is needed to parse JSON in the request body
app.use(express.urlencoded({ extended: true })); // This middleware is needed to parse URL-encoded data

const router =require('./Routes/routes')

app.use(router)

app.listen(4000,()=>{
    console.log(`backend runnning on 4000`)
})