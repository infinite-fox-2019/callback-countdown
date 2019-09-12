const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();

  let menit = 0
  let detik = 0
  if (seconds > 60) {
    menit = Math.floor(seconds / 60)
    detik = seconds - menit * 60
  }else {
    detik = seconds
  }
  
  console.log(chalk.red(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${menit} : ${detik}`)));
  // Your code here...
};

module.exports = { displayCountdown };
