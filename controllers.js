const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let interval = setInterval(function (params) {
    if (seconds === 0) {
     clearInterval(interval) 
    }
    displayCountdown(seconds);
    seconds -= 1;    
  }, 1000)
};

module.exports = {
  timer
};
