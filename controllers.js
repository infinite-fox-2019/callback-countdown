const { displayCountdown } = require("./views");

const timer = seconds => {
  let hitungMundur = setInterval(() => {
    displayCountdown(seconds)
    if (seconds === 0) clearInterval(hitungMundur)
    seconds--
  }, 1000)
};

module.exports = {
  timer
};