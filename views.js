const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let stringSecond = seconds%60
  let stringMenit = Math.floor(seconds/60)
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${stringMenit} : ${stringSecond}`)));
};

module.exports = { displayCountdown };
