const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minute, seconds) => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  const countStr = `${minute / 10 < 1 ? '0' + minute : minute} : ${seconds / 10 < 1 ? '0' + seconds : seconds}`
  console.log(chalk.yellow(figlet.textSync(countStr)))
};

module.exports = { displayCountdown };
