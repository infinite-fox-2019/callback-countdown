const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");


const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  var date = new Date(null);
  date.setSeconds(seconds); // specify value for SECONDS here
  var timeString = date.toISOString().substr(14, 5);
  console.log(chalk.cyan(figlet.textSync(timeString)));
  // Your code here...
};

module.exports = { displayCountdown };
