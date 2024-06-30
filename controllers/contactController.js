const asyncHandler = require("express-async-handler");
const Contact=require("../models/contactmodels")
const getContacts= asyncHandler(async(req,res)=>{
    const contact=await Contact.find()
    res.status(200).json(contact)
})



const createContact=asyncHandler(async(req,res)=>{
    console.log(req.body)
    const{name,email,phonenumber}=req.body;
    if(!name||!email ||!phonenumber)
        {
          res.status(404);
          throw new Error("Empty")  
        }
    const newContact=await Contact.create({
        name,
        email,
        phonenumber 
    })
    res.status(200).json(newContact)
})

const getContact=asyncHandler(async (req,res)=>{
    const idcontact=await Contact.findById(req.params.id)
    res.status(200).json(idcontact);
});

const updateContact= asyncHandler(async(req,res)=>{
    const contactid=await Contact.findById(req.params.id)
    if(contactid){
        const updatecontact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatecontact);
    }
    
    
});

const deleteContact= asyncHandler(async (req,res)=>{
    const contactid=await Contact.findById(req.params.id)
    if(contactid){
        await Contact.findByIdAndDelete(req.params.id)
        
    }
    
});
module.exports={getContact,createContact,deleteContact,updateContact,getContacts}