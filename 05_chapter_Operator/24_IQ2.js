let environment = "production";

let baseURL = environment === "staging" ? "https://staging.example.com" : "https://production.example.com";

console.log(baseURL); // Output: https://production.example.com
