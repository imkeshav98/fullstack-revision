const makeApiCall = () => {
  console.log("api throttle in running for every 2 sec");
};

let count = 0;
function throttler(fn, wait) {
  let lastCall = 0;
  return function () {
    console.log(count++);
    if (Date.now() - lastCall > wait) {
      lastCall = Date.now();
      fn.apply(this, arguments);
    }
  };
}

window.addEventListener("load", function () {
  var btn = document.getElementById("click");
  btn.addEventListener("click", throttler(makeApiCall, 2000));
});
