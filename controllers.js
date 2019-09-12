const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let time = setInterval(() => {
    displayCountdown(seconds)
    if(seconds == 0){
      clearInterval(time)
    }
    seconds--
  }, 1000)
};

module.exports = {
  timer
};
