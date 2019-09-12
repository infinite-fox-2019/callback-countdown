const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 70;
  timer(seconds);
};

main();
