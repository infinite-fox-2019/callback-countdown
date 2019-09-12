const {displayCountdown} = require("./views");

const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const timer = seconds => {
  let detik = seconds;
  displayCountdown(detik)
  let interval = setInterval(function(){
    detik--
    displayCountdown(detik)
    if(detik == 0){
      clearInterval(interval)
    }
  },1000);
};

module.exports = {
  timer
};
