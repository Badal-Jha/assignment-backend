const {Router}=require("express");
const router=Router();
const loanController=require("../controllers/loan.controller")

router.post("/balance-sheet",loanController.getBalanceSheet);
router.post("/apply-loan",loanController.applyLoan)

module.exports=router;