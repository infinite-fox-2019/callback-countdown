const { displayCountdown } = require("./views");

const timer = seconds => {
  let countdown = setInterval(function() {
    console.log(seconds);
    if (seconds > 0) {
      seconds--
      displayCountdown(seconds)
    } else {
      clearInterval(countdown)
    }
  }, 1000)
};

module.exports = {
  timer
};

/*
const timer = function(seconds) {}

function timer(seconds) {}
*/