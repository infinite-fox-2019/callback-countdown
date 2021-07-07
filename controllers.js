const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let myVar = setInterval(function (){
    if (seconds == 0){
      displayCountdown("AJA TEROSS!")
      clearInterval(myVar)
    }
    else{
      let menit = Math.floor(seconds/60)
      let detik = seconds % 60
      displayCountdown(menit, detik)
      seconds--
    }
  } , 1000)
};

module.exports = {
  timer
};
