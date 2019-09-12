const { displayCountdown } = require("./views");

const timer = seconds => {
  let limit = seconds;
  let runner = setInterval(() => {
    let minuteDigits = Math.floor((limit / 60));
    let secondDigits = limit - (minuteDigits * 60);
    if (minuteDigits < 10) {minuteDigits = "0" + minuteDigits;}
    if (secondDigits < 10) {secondDigits = "0" + secondDigits;}
    displayCountdown(minuteDigits + ':' + secondDigits);
    limit--;
    if(limit === 0){
      clearInterval(runner);
      displayCountdown('00:00');
    }
  },1000);
};

module.exports = {
  timer
};
