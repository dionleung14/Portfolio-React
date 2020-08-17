const express = require(`express`);
const mongojs = require("mongojs");
const { data } = require("autoprefixer");

const app = express();

const databaseURL = "contacts";
const collections = ["messages"];

const db = mongojs(databaseURL, collections);

db.on("error", (error) => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/all", (req, res) => {
  db.messages.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
