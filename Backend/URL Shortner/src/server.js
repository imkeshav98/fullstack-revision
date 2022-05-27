const connect = require("./configs/db");
const app = require("./index");
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  try {
    await connect();
    console.log(`Listening to port no. ${port}`);
  } catch (error) {
    console.log(error);
  }
});
