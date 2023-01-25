const mongoose= require('mongoose');
const adminUserSchema= new mongoose.Schema({
    firstName:{type: String, required:true},
    lastName:{type: String, required:true},
    favColor:{type: String, required:true},
    schoolName:{type: String, required:true},
    luckyNumber:{type: String, required:true},
    email:{type: String, required:true},
    password:{type:String, required:true},
    
});
const AdminUser= mongoose.model("adminuser",adminUserSchema);
module.exports={AdminUser};