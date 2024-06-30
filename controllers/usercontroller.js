const AsyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const users=require("../models/usermodal")
const signupuser=AsyncHandler(async(req,res)=>{
    const{username,email,password}=req.body
    if(!username||!email||!password)
        {
            console.log("Error")
            res.status(400)
        }
        const detail=await users.findOne({email})
        if(detail)
            {
                console.log("email id already registered")
            }
        else{
            const hashPassword=await bcrypt.hash(password,10)
            
            const details=await users.create({
                username,email,password:hashPassword
            })
            console.log(`user ${details.id,details.username,details.password}`); 
            res.json(details)
        }
        
    
})
const logincontact=AsyncHandler(async(req,res)=>{
    const{email,password}=req.body
    if(!email||!password)
        {
            res.status(400)
            throw new Error("fill all fileds")
        }

    const checkuser=await users.findOne({email})
    if(!checkuser)
        {
            res.status(400)
            console.log("YOu are not signed up")
        }
    else{
         if(await bcrypt.compare(password,checkuser.password))
            {
                const accesstoken=jwt.sign({
                    user:{
                        username:checkuser.username,
                        email:checkuser.email,
                        id:checkuser.id
                    },

                },
                process.env.accesstokensecret,
                {expiresIn:"1m"},
            )
                res.status(200).json({accesstoken})
            }
            else{
                res.status(400)
            }
    }
    res.json({message:"login successfull"})
})

const currentcontact=AsyncHandler(async(req,res)=>{
    res.json({message:"current contact is :",currentcontact})
})

module.exports={signupuser,logincontact,currentcontact}