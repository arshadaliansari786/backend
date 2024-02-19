const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Arshad:lW62IIdKhgWwO3tY@arshad.w0gfyag.mongodb.net/TestProject")
.then(()=>{
    console.log('connection successfull with TestProject')
})
.catch((e)=>{
    console.log(e)
})