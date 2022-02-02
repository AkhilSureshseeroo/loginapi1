const express=require("express");
const bodyParser=require("body-parser");
const user=require("./routes/user");
const InitiateMongoServer=require("./db/mongoose.js");

InitiateMongoServer();
const app=express();

const PORT= process.env.PORT||3000;

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.json("Working")
});
app.use("/user",user)
app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});