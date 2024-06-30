const express=require("express");
const {  logincontact, currentcontact, signupuser } = require("../controllers/usercontroller");

const router=express.Router();


router.post("/signup",signupuser)

router.post("/login",logincontact)
router.get("/current",currentcontact)


module.exports=router