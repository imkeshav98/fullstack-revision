const checkUrl = (req, res, next) => {
  if (req.body.actual.startsWith("https://")) {
    next();
  } else {
    let temp = req.body.actual;
    req.body.actual = "https://" + temp;
    next();
  }
};

module.exports = checkUrl;
