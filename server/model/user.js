const mongoose= require('mongoose');
const pmoUserSchema= new mongoose.Schema({
    firstName:{type: String, required:true},
    lastName:{type: String, required:true},
    email:{type: String, required:true},
    password:{type:String, required:true},
    
});
const User= mongoose.model("user",pmoUserSchema);
module.exports={User};