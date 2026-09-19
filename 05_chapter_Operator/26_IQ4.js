let responseTime = 850;
let sla = 1000;

let slaStatus = responseTime <= sla ? "SLA Met" : "SLA Breached";
console.log(slaStatus); // Output: SLA Met`

console.log(`Response time: ${responseTime}ms, SLA: ${sla}ms, Status: ${slaStatus}`);

//Template literal; ``