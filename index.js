require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors")
const loanRoute=require("./routes/loan.routes")

app.use(express.json());
app.use( cors({ origin: true,}));
app.get("/",(req,res)=>{
    res.json({message:"success"})
})
app.use(loanRoute);
const PORT = parseInt(process.env.PORT)|| 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
