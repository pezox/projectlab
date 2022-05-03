const express = require("express");
const app = express();

const performance = require('perf_hooks').performance;

function mySlowFunction(baseNumber) {
  //console.time('mySlowFunction');
  let result = 0;
  for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  };
  //console.timeEnd('mySlowFunction');
}

app.listen(3000, function () {
  console.log("nodeapp listening on :3000");
});

app.get("/", (req, res) => {
  var start = performance.now();
  mySlowFunction(10); // 9: ~ 1 s
  var end = performance.now();
  res.send(`Request took ${Math.round((end - start)*100)/100} ms \n`);
});
