const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown", {
    horizontalLayout: 'full',
    verticalLayout: 'full'
  })));
  console.log(chalk.cyan(figlet.textSync("App", {
    horizontalLayout: 'full',
    verticalLayout: 'full'
  })));
  // Your code here...
  console.log(chalk.cyan(figlet.textSync(seconds, {
    font: "Doh",
    horizontalLayout: 'full',
    verticalLayout: 'full'
  })))
};

module.exports = { displayCountdown };
