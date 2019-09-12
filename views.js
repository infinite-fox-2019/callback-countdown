const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.white(figlet.textSync("Countdown App")));
  let minute = Math.floor(seconds / 60) + ''
  let second = seconds % 60
  if (minute.length === 1) {
    minute = '0' + minute
  }

  console.log(chalk.cyan(figlet.textSync(minute + ' : ' + second)));

};

module.exports = { displayCountdown };
