const { displayCountdown } = require("./views");

//Same like:
// const timer = function(seconds) {
  
// }

const timer = seconds => {
  // Your code here...
  let interval = setInterval(function() {
    if (seconds >= 0) {
      displayCountdown(seconds)
      seconds--
    } else if (seconds < 0) {
      clearInterval(interval)
    }
  }, 1000)

  displayCountdown(seconds)
};


module.exports = {
  timer
};
