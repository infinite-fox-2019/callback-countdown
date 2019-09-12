const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let timing = setInterval(function(){
    if(seconds === 0) {
      clearInterval(timing)
    }
    displayCountdown(seconds)
    seconds--
  },1000)
};

module.exports = {timer};