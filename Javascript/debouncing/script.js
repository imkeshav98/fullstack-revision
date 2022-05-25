const callback = () => {
  console.log("APi debounce in progress");
};

function debounce(fn, delay) {
  let debouncing;
  return function () {
    debouncing && clearTimeout(debouncing);
    debouncing = setTimeout(fn.apply(this, arguments), delay);
  };
}

window.addEventListener("load", function () {
  var btn = document.getElementById("click");
  btn.addEventListener("click", debounce(callback, 1000));
});
