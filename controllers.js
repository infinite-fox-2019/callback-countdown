const { displayCountdown } = require("./views");

const timer = seconds => {
  let interval = setInterval(function(){
    displayCountdown(seconds)
    seconds--
    if(seconds < 0){
      clearInterval(interval)
    }
  },1000)
};

module.exports = {
  timer
};
