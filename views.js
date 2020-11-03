const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let menit = Math.floor(seconds/60)
  if (menit < 10){
    menit = `0${menit}`
  }
  let detik = Math.round(seconds%60)
  if (detik < 10){
    detik = `0${detik}`
  }
  console.log(chalk.magenta(figlet.textSync("Countdown App")));
  console.log(chalk.yellow(figlet.textSync(`${menit} : ${detik}`)))}
};

module.exports = { displayCountdown };
