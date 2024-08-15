console.log("Showing the use of global variables in Node.js");

console.log("\n", "__dirname will print the directory name: ", __dirname, '\n');
console.log("__filename will print the full path and the file name: ", __filename);

require("./dir-1/1.1");
require("./dir-1/1.2.js");
require("./dir-2/2.1");
require("./dir-2/2.2.js");

console.log("\n", "__dirname will print the directory name: ", __dirname, '\n');
console.log("__filename will print the full path and the file name: ", __filename);