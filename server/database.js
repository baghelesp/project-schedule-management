const mongooose= require("mongoose");

const connectDB= async()=>{
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology:true,
        };
    try{
        await mongooose.connect("mongodb://127.0.0.1/ProjectScheduleDb", connectionParams);
        console.log("Connected to database successfully ");
    }
    catch(error)
    {
        console.log(error);
        console.log("couldnt connect to DB");
    }
}

module.exports =connectDB;

// module.exports=()=>{
    
//     try{
//         mongooose.connect("mongodb://localhost:27017/ProjectScheduleDb", connectionParams);
//         console.log("Connected to database successfully ");
//     }catch(error)
//     {
//         console.log(error);
//         console.log("couldnt connect to DB");
//     }
// }