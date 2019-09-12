const {
  displayCountdown
} = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function () {
    if (seconds < 0) {
      clearInterval()
    }
    let menit = Math.floor(seconds / 60);
    let detik = seconds % 60;

    if (menit < 10) {
      menit = '0' + menit
    }

    let hasil = `${menit} : ${detik}`
    displayCountdown(hasil);
    seconds--
  }, 800);

};
module.exports = {
  timer
};