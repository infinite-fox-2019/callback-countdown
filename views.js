const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  // clear();
  // console.log(chalk.yellow.bold(figlet.textSync("Happy New Year")));
  // console.log(chalk.blue.bold(figlet.textSync(seconds)));
  if (seconds === 0) {
    clear();
    console.log(chalk.red.bgYellow.bold(figlet.textSync("Happy New Year")));
  } else {
    clear();
    console.log(chalk.yellow.bold(figlet.textSync("Ayo Menghitung")));
    console.log(chalk.blue.bold(figlet.textSync(seconds)));
  }
  // Your code here...
};

module.exports = { displayCountdown };
