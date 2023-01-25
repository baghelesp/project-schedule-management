const router= require("express").Router();
const {Project}=require("../model/project")

router.post("/",async(req,res)=>{
    try{
        
        console.log(req.body);
        

        await new Project({...req.body}).save();

        res.send({message:"Successfull"})
    }catch(error){
        console.log(error);
        res.send({message:"UnSuccessfull"});
    }
})

module.exports= router;