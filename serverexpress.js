const express = require(`express`);
const path = require(`path`);
const fs = require(`fs`);
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/porfolio", {
  useNewUrlParser: true,
});

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("db"));

// HTML routes
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/public", "index.html"));
});

app.get("/notes", function (request, response) {
  response.sendFile(path.join(__dirname + "/public", "notes.html"));
});

// API routes
app.get("/api/notes", function (request, response) {
  fs.readFile("./db/db.json", "utf8", function (error, data) {
    if (error) {
      return response.status(400).send({ success: false });
    }
    const parsed = JSON.parse(data);
    return response.json(parsed);
  });
});

app.post("/api/notes", function (request, response) {
  const newNote = request.body;
  fs.readFile("./db/db.json", "utf8", function (error, data) {
    if (error) {
      return response.status(400).send({ success: false });
    }
    const existingNotes = JSON.parse(data);
    if (existingNotes.length === 0) {
      newNote.id = 1;
    } else {
      const lastNote = existingNotes[existingNotes.length - 1];
      newNote.id = lastNote.id + 1;
    }
    existingNotes.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(existingNotes), function (
      error,
      data
    ) {
      if (error) {
        return response.status(400).send({ success: false });
      }
      response.status(200).send({ success: true });
    });
  });
});

app.delete("/api/notes/:id", function (request, response) {
  const idDelete = parseInt(request.params.id);
  fs.readFile("./db/db.json", "utf8", function (error, data) {
    if (error) {
      return response.status(400).send({ success: false });
    }
    const existingNotes = JSON.parse(data);

    existingNotes.forEach((note, index) => {
      if (note.id === idDelete) {
        existingNotes.splice(index, 1);
      }
    });
    fs.writeFile("./db/db.json", JSON.stringify(existingNotes), function (
      error,
      data
    ) {
      if (error) {
        return response.status(400).send({ success: false });
      }
      response.status(200).send({ success: true });
    });
  });
});

app.listen(PORT, function () {
  console.log(`Server is live on port ${PORT}`);
});
