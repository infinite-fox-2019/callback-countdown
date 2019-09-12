const { displayCountdown } = require("./views");

const timer = seconds => {
  let interval = setInterval(function(){
    if(seconds === 0) {
      clearInterval(interval);
    }
    displayCountdown(seconds);
    seconds--
  },1000)
};

module.exports = {
  timer
};
