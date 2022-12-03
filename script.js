let count = 0;

document.getElementById("decrementButton").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("resetButton").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("incrementButton").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};
