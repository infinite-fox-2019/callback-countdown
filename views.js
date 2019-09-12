const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minute, seconds) => {
    if (minute === 0 && seconds === undefined) {
        clear();
        console.log(chalk.red.bgYellow.bold(figlet.textSync("Happy New Year")));
    } else {
        clear();
        console.log(chalk.yellow.bold(figlet.textSync("Ayo Menghitung")));
        console.log(chalk.blue.bold(figlet.textSync(`${minute} : ${seconds}`)));
    }
};

module.exports = {
    displayCountdown
};
