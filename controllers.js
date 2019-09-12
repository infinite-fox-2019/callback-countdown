const { displayCountdown } = require("./views");

const timer = seconds => {

  const time = setInterval(() => {
    displayCountdown(seconds)
    seconds--
    if (!seconds) clearInterval(time)
  }, 1000)
};

module.exports = {
  timer
};
