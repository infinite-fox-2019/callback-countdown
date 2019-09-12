const { displayCountdown } = require("./views");


const timer = seconds => {
  let play = setInterval(function(){
    if (seconds === 0) {
      displayCountdown(seconds);
      clearInterval(play);
    } else {
      displayCountdown(seconds);
      seconds--;
    }
  },500)
};
// const timer = function(seconds) {

// }
module.exports = {
  timer
};
