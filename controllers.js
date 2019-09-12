const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...

  // let detik = 20

    const timer = setInterval(function(){
      seconds = seconds-1
      displayCountdown(seconds)
      if(seconds == 0){
        clearInterval(timer)
      }
    },1000)



};

module.exports = {
  timer
};
