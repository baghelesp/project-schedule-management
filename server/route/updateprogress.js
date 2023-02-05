const router= require("express").Router();
const {Project}=require("../model/project")

router.post("/",async(req,res)=>{
    try{
        
        console.log(req.body);
        const projectId=req.body._id;
        const progress=req.body.progress;
        // await new Project({...req.body}).save();
        console.log(projectId);
        await Project.findByIdAndUpdate({ _id: projectId}, {
            progress:progress,
          });

        res.send({message:"Saved"})
    }catch(error){
        console.log(error);
        res.send({message:"Error"});
    }
})

module.exports= router;