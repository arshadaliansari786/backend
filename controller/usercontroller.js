const User = require("../models/userSchema");


//registration api
exports.userregister =async (req,res)=>{
    console.log(req.body)
const file = req.file;
const {name,email,password} = req.body;
if(!name || !email ||!password){
    res.status(400).json({msg:"Please fill all fields"})
}

const userexist =await User.findOne({email: email});
if(userexist) {
    res.status(400).json({ msg: "Email already exists." });
} 
else{
    try{
        const newuser = new User({name,email,password});
        const usersave = await newuser.save();
        res.send(usersave);
    }
    catch(error){
        console.log(error)
    }
}
//    console.log(req.file)
//    console.log(req.body)
//     res.send('user register successfully!')
}



//login api
exports.userlogin =async (req,res)=>{
    const{email,password}=req.body;
    console.log(req.body)
    User.findOne( { email:email })
    .then(user=>{
        if(user){
            if(user.password===password)
            {
                res.json("Success");
            }
            else{
                res.json("Password is incorrect");
            }
        }
        else{
            res.json('No Record Exist');
        }
    })
    .catch(err=>res.json(err))
       
    //    console.log(req.body)
    //    res.send('user logged in successfully!')
    }

//get api
exports.userdetails =async (req,res)=>{
    User.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err)
    )
   }


   exports.getUserById =async (req,res)=>{
    const id=req.params.id;
    User.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
}
   
exports.updateUserDetails =async (req,res)=>{
    const id=req.params.id;
    User.findByIdAndUpdate(
        {_id:id},
        {
            name:req.body.name,
            email:req.body.email,
        })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
}
   
exports.deleteUser =async ( req , res ) =>{
    const id= req.params.id;
    User.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
}
   