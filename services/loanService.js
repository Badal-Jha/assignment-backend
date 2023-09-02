const dayjs=require("dayjs")

module.exports.getPreAssement=(balanceSheet,loanAmount)=>{
    const now = dayjs()
          let lastYearBalances = balanceSheet
        .filter((balance) =>
            dayjs(new Date(balance.year, balance.month)).diff(now, 'month') <= 12);
         
         let preAssessment=20;
         //If a business has made a profit in the last 12 months
         lastYearBalances.forEach((sheet)=>{
            if(sheet.profitOrLoss>0){
                preAssessment=60;
            }
         });
         
         console.log("lastyear",lastYearBalances);
       let averageAssetValue=0;

        let sum=0;

         lastYearBalances.forEach(sheet => {
            sum+=sheet.assetValue;
         });
         averageAssetValue=sum/lastYearBalances.length;

         if(averageAssetValue>loanAmount){
            preAssessment=100;
         }

         return preAssessment;
}