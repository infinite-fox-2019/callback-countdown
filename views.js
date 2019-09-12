const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));

  let min = 0
  while (seconds > 60) {
    min++
    seconds = seconds - 60
  }

  if (min < 10) {
    min = '0' + min
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  console.log(chalk.cyan(figlet.textSync(`${min}:${seconds}`)));
};

module.exports = { displayCountdown };
