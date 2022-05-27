const mongooose = require("mongoose");
require("dotenv").config();
const connect = async () => {
  await mongooose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connect;
