const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...

  console.log(chalk.cyan(figlet.textSync(`${Math.floor((seconds%3600)/60)} : ${seconds%60}`)))
  
};

module.exports = { displayCountdown };
