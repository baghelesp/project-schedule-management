const mongoose= require('mongoose');
const progressSchema= new mongoose.Schema({
    progress : {type : Number },  
});
const Project= mongoose.model("project",projectSchema);
module.exports={Project};