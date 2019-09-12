const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let countdown = setInterval(function(){
    // let minutes = Math.floor(seconds/ 60)
    // let detik = seconds % 60
    seconds--
    displayCountdown(seconds)
    if(seconds === 0){
      clearInterval(countdown)
    }
  }, 1000)
};

module.exports = {
  timer
};


//340
// minutes: 5
