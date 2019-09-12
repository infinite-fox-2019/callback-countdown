const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var mySet = setInterval ( () => {
    // displayCountdown(seconds);
    if ( seconds < 0 ) {
      clearInterval ( mySet );
    }else {
      var minute = Math.floor(seconds/60)
      var detik = seconds%60;
      if ( minute < 10 ) {
        minute = '0' + minute;
      }
      if ( detik < 10 ) {
        detik = '0' + detik;
      }
      var result = minute + ' : ' + detik
      displayCountdown ( result );
      seconds-=1;
    }
    
  }, 1000 )
};

module.exports = {
  timer
};
