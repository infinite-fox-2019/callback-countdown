const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  const minute = Math.floor(seconds / 60)
  seconds = seconds % 60
  const countdown = setInterval(() => {
    displayCountdown(minute, seconds)
    seconds--
    if (seconds < 0 && minute > 0) {
      minute--
      seconds = 59
    } else if (minute === 0 && seconds < 0) {
      clearInterval(countdown)
    }
  }, 1000)
};

module.exports = {
  timer
};
