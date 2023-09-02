
module.exports.getBalanceSheet=async(accountingProvider)=>{
    
        try {
          // Simulate fetching a balance sheet from the accounting software
          console.log("reaching service")
    const balanceSheet = [
    {
        "year": 2020,
        "month": 12,
        "profitOrLoss": 250000,
        "assetsValue": 1234
    },
    {
        "year": 2020,
        "month": 11,
        "profitOrLoss": 1150,
        "assetsValue": 5789
    },
    {
        "year": 2020,
        "month": 10,
        "profitOrLoss": 2500,
        "assetsValue": 22345
    },
    {
        "year": 2020,
        "month": 9,
        "profitOrLoss": -187000,
        "assetsValue": 223452
    }
]
      console.log("returning the balance sheet",balanceSheet)
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(balanceSheet);
            }, 1000); // Simulate an asynchronous delay
          });
        } catch (error) {
            new Promise((resolve) => {
                setTimeout(() => {
                  resolve("error fetching the sheet");
                }, 1000); // Simulate an asynchronous delay
              });
        }
    
}