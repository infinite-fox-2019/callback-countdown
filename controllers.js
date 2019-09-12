const { displayCountdown } = require("./views");

const timer = (seconds) => {
  const lili = setInterval(function() {

    if (seconds < 0) {
      clearInterval(lili);
    } else {
      displayCountdown(seconds);
      // console.log(seconds)

      seconds--
    }
  }, 1000);

};
module.exports = {
  timer
};
