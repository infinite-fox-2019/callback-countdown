const { displayCountdown } = require("./views");

const timer = seconds => {
  let count = setInterval(function(){
    if (seconds > 0){
      seconds--
      displayCountdown(seconds)
    }
    else{
      clearInterval(count)
    }
  }, 1000)

};

module.exports = {
  timer
};
