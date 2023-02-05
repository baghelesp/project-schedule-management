const mongoose= require('mongoose');
const projectSchema= new mongoose.Schema({
    projectName:{type: String, required:true},
    problemStatement:{type: String, required:true},
    sow :{type: String, required:true},
    empemail:{type: String, required:true},
    startDate:{type:String, required:true},
    endDate:{type:String, required:true},
    budget: {type:Number, required:true},
    progress:{type:Number, default:0},
    status: {type:String, required:true},
});
const Project= mongoose.model("project",projectSchema);
module.exports={Project};