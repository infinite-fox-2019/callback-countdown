const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.red.bold(figlet.textSync("Loading")));
  console.log(chalk.yellow.bold(figlet.textSync(seconds)));
  // Your code here...
};

module.exports = { displayCountdown };
