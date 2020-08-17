const express = require(`express`);
const mongojs = require("mongojs");
// const { data } = require("autoprefixer");

const app = express();
const PORT = process.env.PORT || 3001;

const databaseURL = "portfolio";
const collections = ["contacts"];

const db = mongojs(databaseURL, collections);

db.on("error", (error) => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/all", (req, res) => {
  db.contacts.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.post("/contact", (req, res) => {
  db.contacts.insert(
    {
      call: req.body.call,
      email: req.body.email,
      emailAddress: req.body.emailAddress,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      message: req.body.message,
      phNum: req.body.phNum,
      subject: req.body.subject,
      text: req.body.text,
      date: req.body.date,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
