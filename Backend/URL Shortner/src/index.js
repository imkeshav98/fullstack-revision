const express = require("express");
const checkUrl = require("./middleware/check.Url");
const UrlModel = require("./models/url.Models");

const app = express();

app.use(express.json());

app.post("", checkUrl, async (req, res) => {
  try {
    let data = await UrlModel.findOne({ short: req.body.short });
    if (data) {
      res.status(404).send("Try diffrent shortId");
    }
    const urlData = await UrlModel.create(req.body);
    res.status(201).send(urlData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/allurl", async (req, res) => {
  try {
    const urlData = await UrlModel.find({}).lean().exec();
    res.status(200).send({ Urls: urlData });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/:short", async (req, res) => {
  try {
    let urlData = await UrlModel.findOne({ short: req.params.short });
    if (!urlData) {
      res.status(404).send("Not Found");
    } else {
      let updateData = await UrlModel.findOneAndUpdate({
        clicks: urlData.clicks + 1,
      });
      console.log(urlData.actual);
      res.redirect(302, urlData.actual);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
