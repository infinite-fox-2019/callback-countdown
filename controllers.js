const { displayCountdown } = require("./views");

const timer = (seconds) => {
  const lili = setInterval(function() {
    if (seconds === 0) {
      clearInterval(lili);
    } else {
      displayCountdown(seconds);
      seconds--
    }
  }, 500);

};
module.exports = {
  timer
};
