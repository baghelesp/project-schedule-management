const router=require("express").Router();
const {AdminUser}=require("../model/admin");


router.post("/",async(req,res)=>{
    
    try {
        console.log(req.body)
        
        const adminuser= await AdminUser.findOne({email:req.body.email});
        if(!adminuser)
            return res.send({message:"Invalid Email or Password"})
        else
        {
            if(req.body.password== adminuser.password && req.body.favColor==adminuser.favColor && req.body.schoolName==adminuser.schoolName && req.body.luckyNumber==adminuser.luckyNumber)
            {
                console.log("user : "+adminuser);
                return res.send({message:"Successfull", adminuser: adminuser});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal server error"});
    }
})

module.exports= router;