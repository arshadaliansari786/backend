const express = require('express')

const router =express.Router()
const User = require("../models/userSchema")
const usercontroller = require("../controller/usercontroller")
const upload = require("../multer/imageconfig")

router.post('/register',upload.single("img"), usercontroller.userregister)

router.post('/login',usercontroller.userlogin)

router.get("/",usercontroller.userdetails)

router.get("/getuser/:id",usercontroller.getUserById)


router.put("/update/:id",usercontroller.updateUserDetails)

//delete user by id
router.delete( "/deleteUser/:id" , usercontroller.deleteUser)


module.exports=router