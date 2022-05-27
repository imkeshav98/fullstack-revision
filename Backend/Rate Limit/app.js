// Express server on port 3000
const express = require("express");
const app = express();
const port = 3500;
const posts = require("./posts");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  max: 5, // max requests
  windowMs: 60 * 1000, // 1 minute
});

app.get("/posts", limiter, (req, res) => {
  res.send({
    status: "success",
    posts: posts,
  });
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
