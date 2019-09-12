const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(seconds)
  let minute = 0;
  let sec = 0;

  if (seconds > 60) {
    minute = Math.floor(seconds/60);
    sec = seconds - minute;
  }else {
    sec = seconds;
  }
  
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${minute} : ${sec}`)));
  // Your code here...
};

module.exports = { displayCountdown };

