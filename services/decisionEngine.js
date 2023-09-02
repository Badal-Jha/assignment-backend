module.exports.getDecision=async(businessName,yearEstablished,preAssessment)=>{
    try {
       //decision logic
      
        const isApproved = preAssessment > 35; 
    
       
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve(isApproved);
            }, 1000); // Simulate an asynchronous delay
          });
      } catch (error) {
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve("error");
            }, 1000); // Simulate an asynchronous delay
          });
      }
}