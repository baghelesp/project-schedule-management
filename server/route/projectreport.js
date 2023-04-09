//for displaying all project to admin user
const router= require("express").Router();
const {Project}= require("../model/project");
const {User}=require("../model/user");

router.get("/",async(req,res)=>{
    try{
        Project.find({}, (error, data) => {
            if (error) {
                res.send({message :error})
            } else {
                console.log("data fetched with id : "+data);
                console.log("data type : "+typeof(data));
                res.json(data)
            }
        })
    }catch(error){
        console.log(error);
        res.send({message:"UnSuccessfull"});
    }
})

module.exports= router;