const express = require(`express`);
const mongojs = require("mongojs");
// const { data } = require("autoprefixer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

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

app.post("/submit", (req, res) => {
  console.log(req.body);
  console.log(res);
  db.contacts.insert(
    {
      hello: req.body.test,
      // call: req.body.call,
      // email: req.body.email,
      // emailAddress: req.body.emailAddress,
      // firstName: req.body.firstName,
      // lastName: req.body.lastName,
      // message: req.body.message,
      // phNum: req.body.phNum,
      // subject: req.body.subject,
      // text: req.body.text,
      // date: req.body.date,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(data);
      }
    }
  );
  // );
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
