const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.blue(figlet.textSync("Countdown App")));
  if (seconds%60 < 10){
    console.log(chalk.yellow(figlet.textSync(`${Math.floor(seconds/60)} : 0${Math.round(seconds%60)}`)))
  }else{
    console.log(chalk.yellow(figlet.textSync(`${Math.floor(seconds/60)} : ${Math.round(seconds%60)}`)))
  }
};

module.exports = { displayCountdown };
