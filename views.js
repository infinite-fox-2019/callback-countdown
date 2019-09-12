const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (menit,detik) => {
  clear();

  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${menit}: ${detik}`)));
  // Your code here...
};

module.exports = { displayCountdown };
