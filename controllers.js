const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let waktuDalamDetik = seconds
  let interval = setInterval(() => {
    waktuDalamDetik--
    let menit = Math.floor(waktuDalamDetik / 60)
    let detik = waktuDalamDetik % 60
    displayCountdown(menit , detik)
    if(waktuDalamDetik === 0)clearInterval(interval)
  }, 1000)
  
  
};

module.exports = {
  timer
};
