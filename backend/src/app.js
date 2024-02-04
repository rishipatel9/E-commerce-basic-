import express from "express";
import cors from "cors";
const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN
}));

app.get('/',(req,res)=>{
    res.send("hello from backend");
})
app.listen(3000);
export {app}