const { displayCountdown } = require("./views");

const timer = seconds => {
  let interval = setInterval(()=>{
    let menit = Math.floor(seconds/60)
    if(menit<10){
      menit = '0'+menit
    }
    let second = seconds%60
    if(second<10){
      second = '0'+second
    }
    let test = ''
    test+= menit +':'+second
    displayCountdown(test)
    seconds-=1
    if(seconds < 0){
      clearInterval(interval)
    }
  },1000)
};
module.exports = {
  timer
};
