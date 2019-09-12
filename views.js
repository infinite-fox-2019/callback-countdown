const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear()
  // Your code here...
  let menit = Math.floor(seconds/60)
  if(menit < 10){
    menit = '0' + menit
  }
  let detik = seconds%60
  if(detik < 10){
    detik = '0' + detik
  }
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(menit +' : '+ detik)));
  
};

module.exports = { displayCountdown };
