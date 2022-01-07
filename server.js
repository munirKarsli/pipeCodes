const express = require("express");
const db = require("./app/models");
const config = require("./app/config/config")

const app = express();

app.use(express.json());

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to CodePipes demo application." });
});

require("./app/routes/routes")(app);

app.listen(config.getServerPort(), () => {
  console.log(`Server is running on port ${config.getServerPort()}.`);
});
