const express = require(`express`);
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();
// const { Mongoose, MongooseDocument } = require("mongoose");
// const routes = require("./routes");
// const { data } = require("autoprefixer");

const app = express();
const PORT = process.env.PORT || 4000;

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/porfolio", {
//   useNewUrlParser: true,
// });

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio";
mongoose.connect(MONGODB_URI);

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
  // console.log(req.body);
  // console.log(res);
  db.contacts.insert(
    {
      // hello: req.body.test,
      call: req.body.call,
      email: req.body.email,
      emailAddress: req.body.emailAddress,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      message: req.body.message,
      phNum: req.body.phNum,
      subject: req.body.subject,
      text: req.body.text,
      date: Date.now(),
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

app.post("/email", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // user: "no-reply@gmail.com",
      // Need to create a dummy email account to use here
      // find out how to protect them in process.env?
      user: process.env.EMAIL,
      // pass: "testpassword",
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: `${req.body.emailAddress}`,
    to: "kungfumastah.dion@gmail.com",
    subject: `Message from portfolio: ${req.body.subject}`,
    text: `Here is a message from your portfolio!
    From: ${req.body.firstName} ${
      req.body.lastName ? req.body.lastName : "Doe"
    } \n
    Email: ${req.body.emailAddress} \n
    Subject: ${req.body.subject} \n
    Message: ${req.body.message} \n
    Phone number: ${
      req.body.phNum ? req.body.phNum : "no return number left"
    } \n
    Contact method(s): email? ${req.body.email ? "Yes" : "No"}; call? ${
      req.body.call ? "Yes" : "No"
    }; text? ${req.body.text ? "Yes" : "No"} \n
    Received at: ${Date(req.body.date)}
    `,
    // replyTo: `${req.body.emailAddress}`,
  };
  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", res);
    }
  });
  // res.send("email sent!");
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
