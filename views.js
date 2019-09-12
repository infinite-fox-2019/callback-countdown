const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  // Your code here...
  let minutes = Math.floor(seconds/ 60)
  let detik = seconds % 60
  if(detik<10){
    console.clear()
    console.log(chalk.red(figlet.textSync("Countdown App")));
    console.log(chalk.cyan(figlet.textSync(`${minutes}:0${detik}`)))
  } else {
    console.clear()
    console.log(chalk.red(figlet.textSync("Countdown App")));
    console.log(chalk.cyan(figlet.textSync(`${minutes}:${detik}`)))
  }
};

module.exports = { displayCountdown };
