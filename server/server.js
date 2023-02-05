const express= require('express');
var bodyParser = require('body-parser');
const app= express();
var cors = require('cors');
const {AdminUser}=require("./model/admin");

const connection= require("./database.js");
const register = require('./route/register');
const login= require("./route/login");
const adminlogin= require("./route/adminlogin");
const project =require("./route/createproject");
const userproject =require("./route/userproject");
const updateprogress= require("./route/updateprogress");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
connection();
app.use(express.json());

app.use("/api/register", register);
app.use("/api/login",login);
app.use("/api/adminlogin",adminlogin);
app.use("/api/createproject",project);
app.use("/api/userproject",userproject);
app.use("/api/updateprogress", updateprogress);

const port=5000;
app.listen(port,()=>{
    console.log(`listening on localhost:${port}`);
})
