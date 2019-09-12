const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minute, seconds) => {
  clear();
  console.log(chalk.red.bold(figlet.textSync("Loading")));
  if (typeof minute == "string"){
    console.log(chalk.yellow.bold(figlet.textSync(`${minute}`)));
  }
  else if (minute <= 9 && seconds <= 9){
    console.log(chalk.yellow.bold(figlet.textSync(`0${minute}:0${seconds}`)));
  }
  else if (minute <= 9){
    console.log(chalk.yellow.bold(figlet.textSync(`0${minute}:${seconds}`)));
  }
  else if (seconds <= 9){
    console.log(chalk.yellow.bold(figlet.textSync(`${minute}:0${seconds}`)));
  }
  else{
    console.log(chalk.yellow.bold(figlet.textSync(`${minute}:${seconds}`)));
  }
  // Your code here...
};

module.exports = { displayCountdown };
