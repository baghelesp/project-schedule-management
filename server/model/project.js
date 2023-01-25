const mongoose= require('mongoose');
const projectSchema= new mongoose.Schema({
    projectName:{type: String, required:true},
    problemStatement:{type: String, required:true},
    empemail:{type: String, required:true},
    startDate:{type:String, required:true},
    endDate:{type:String, required:true}
});
const Project= mongoose.model("project",projectSchema);
module.exports={Project};