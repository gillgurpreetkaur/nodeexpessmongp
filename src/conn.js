const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{console.log("connected");}).catch((e)=>{console.log(e);})