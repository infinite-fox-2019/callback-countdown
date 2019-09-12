const { displayCountdown } = require("./views");

const timer = seconds => {
  let countDown = setInterval(function () {

    if (seconds >= 0) {
      displayCountdown(seconds--)
    } else {
      clearInterval(countDown)
    }
  }, 1000)

};

module.exports = {
  timer
};
