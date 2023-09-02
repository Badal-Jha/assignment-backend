const accountingSoftware=require("../services/accountingSoftware")
const loanService=require("../services/loanService")
const decisionEngine=require("../services/decisionEngine")
module.exports.getBalanceSheet=async(req,res)=>{
      const {bussinessName,establishYear,loanAmount,accountingProvider}=req.body;
      console.log(bussinessName,establishYear,loanAmount,accountingProvider)

      try{
           
        //fetch balancesheet from mock accounting software
        const balanceSheet=await accountingSoftware.getBalanceSheet(accountingProvider);

     
        res.status(200).json(balanceSheet);
         
      }catch(err){
          res.status(500).json({messgae:"server error",error:err});
      }
}
module.exports.applyLoan=async(req,res)=>{
    const {businessName,establishYear,loanAmount,balanceSheet}=req.body;
 console.log("reaching",balanceSheet)
    try{   
        console.log("reached")
           const preAssessment=loanService.getPreAssement(balanceSheet,loanAmount);

           const isApproved = await decisionEngine.getDecision( businessName, establishYear, preAssessment );

           res.status(200).json({balanceSheet,preAssessment,isApproved});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"server error",error:err});
    }
}

