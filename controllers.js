const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let myVar = setInterval(function (){
    if (seconds == 0){
      displayCountdown("AJA TEROSS!")
      clearInterval(myVar)
    }
    else{
      displayCountdown(seconds)
      seconds--
    }
  } , 1000)
};


module.exports = {
  timer
};
