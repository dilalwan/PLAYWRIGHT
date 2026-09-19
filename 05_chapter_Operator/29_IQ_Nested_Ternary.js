let statusCode=404;
let category=
    statusCode>=100 && statusCode<200 ? "Informational" :
    statusCode>=200 && statusCode<300 ? "Success" :
    statusCode>=300 && statusCode<400 ? "Redirection" :
    statusCode>=400 && statusCode<500 ? "Client Error" :
    statusCcode>=500 && statusCode<600 ? "Server Error" : "Unknown Status Code";
console.log(`Status ${statusCode} : ${category}`); // Output: "Client Error"    
