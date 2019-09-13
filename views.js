const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let mnt = Math.floor(seconds/60)
  if (mnt < 10) {
    mnt = `0${mnt}`
  }
  let dtk = Math.round(seconds%60)
  if (dtk < 10) {
    dtk = `0${dtk}`
  }
  console.log(chalk.cyan(figlet.textSync(seconds)));
  console.log(chalk.red(figlet.textSync("Countdown App")));
  
};

module.exports = { displayCountdown };
