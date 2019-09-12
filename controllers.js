const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let countdownInterval = setInterval(function(){
    if(seconds === 0) {
      clearInterval(countdownInterval);
    }
    displayCountdown(seconds--);
  }, 1000);
};

module.exports = {
  timer
};
