let isCI = false;

let browserMode = isCI ? "headless" : "headed";

console.log("Launching browser in " + browserMode + " mode."); // Output: Launching browser in headless mode.