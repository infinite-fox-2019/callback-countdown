const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let minute = Math.floor(seconds/60);
  let detik = seconds%60;
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  if(minute>9){
    if(detik>9){
      console.log(chalk.cyan(figlet.textSync(`${minute} : ${detik} `)));
    }
    else {
      console.log(chalk.cyan(figlet.textSync(`${minute} : 0${detik} `)));
    }
    
  } else {
    if(detik>9){
      console.log(chalk.cyan(figlet.textSync(`0${minute} : ${detik} `)));
    }
    else {
      console.log(chalk.cyan(figlet.textSync(`0${minute} : 0${detik} `)));
    }
  }  
};
// console.log(displayCountdown(500))
module.exports = { displayCountdown };
