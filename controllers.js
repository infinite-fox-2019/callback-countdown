const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
const interval =  setInterval(function(){
    displayCountdown(seconds)
    if(seconds === 0 ){
      clearInterval(interval)
    }
    seconds--
  }, 1000);
};

module.exports = {
  timer
};
