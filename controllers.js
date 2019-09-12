const { displayCountdown } = require("./views");

const timer = seconds => {
  let start = setInterval(function(){
    let displayMinutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;
    if(displayMinutes < 10) {
      displayMinutes = "0" + displayMinutes;
    }
    if(displaySeconds < 10) {
      displaySeconds = "0" + displaySeconds;
    }
    displayCountdown(`${displayMinutes} : ${displaySeconds}`)
    seconds--;
    if(seconds === 0) {
      clearInterval(start);
      displayCountdown('00:00');
    }
  },1000)
};

module.exports = {
  timer
};
