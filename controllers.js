const { displayCountdown } = require("./views");


const timer = seconds => {
  let play = setInterval(function(){
    if (seconds === 0) {
      displayCountdown(seconds);
      clearInterval(play);
    } else {
      let minute = Math.floor(seconds/60);
      let detik = seconds%60;
      displayCountdown(minute, detik);
      seconds--;
    }
  },500)
};

module.exports = {
  timer
};
