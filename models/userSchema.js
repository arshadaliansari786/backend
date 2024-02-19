const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    name:{
        type:String,
        length:200,
        require:true
    },
    email:{
        type:String,
        length:200,
        require:true
    },
    password:{
        type:String,
        length:200,
        require:true
    }

});


const User = mongoose.model( 'Users', Schema );
module.exports=User;