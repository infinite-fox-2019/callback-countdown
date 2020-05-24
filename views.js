const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...

  let detikSaatIni = (new Date(seconds * 1000).toISOString().substr(14, 5))
  console.log(chalk.cyan(figlet.textSync(`${detikSaatIni}`)));
};

module.exports = { displayCountdown };
