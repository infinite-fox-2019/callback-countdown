const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.red(figlet.textSync(`Final CountDown`)));

  let min = String(Math.floor(seconds / 60))
  let sec = String(Math.floor(seconds % 60))

  if (min.length === 1) {
    min = '0' + min
  }
  if (sec.length === 1) {
    sec = '0' + sec
  }

  console.log(chalk.cyan(figlet.textSync(`                            ${min} : ${sec}`)));
};

module.exports = { displayCountdown };
