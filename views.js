const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

//Same like:
// const displayCountdown = function(seconds) {
  
// }

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...

  let minute = Math.floor(((seconds % 3600) / 60));
  let second = Math.floor(seconds % 60);

  if (minute < 10 ) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  let time =  minute + ':' + second;
  console.log(chalk.cyan(figlet.textSync(time)));
};

module.exports = { displayCountdown };
