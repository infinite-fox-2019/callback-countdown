const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minute = 0;
  while (seconds >= 60) {
    minute++;
    seconds -= 60;
  }
  console.log(chalk.cyan(figlet.textSync(`${(minute < 10 ? '0' : '') + minute}:${(seconds < 10 ? '0' : '') +seconds}`)));
};

module.exports = { displayCountdown };
