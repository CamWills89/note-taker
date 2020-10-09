const { db } = require("../../db/db.json");
const router = require('express').Router();
const fs = require("fs");
//npm package to create a random unique id
const {v4 : uuidv4} = require('uuid');

let notes;

let savedNotes = fs.readFileSync("./db/db.json", "UTF-8");
if (savedNotes) {
    let oldNotes = JSON.parse(savedNotes);
    notes = oldNotes;
} else {
    notes = [];
}

router.get("/notes", (req, res) => {
  // let notes = db
  return res.json(notes);
});

router.post("/notes", function(req, res) {});


// router.post("/notes", function(req, res) {

//   let noteId = uuidv4();
//   let newNote = {
//     id: noteId,
//     title: req.body.title,
//     text: req.body.text
//   };

//   fs.readFile("./db/db.json", "utf8", (err, data) => {
//     if (err) throw err;

//     const allNotes = JSON.parse(data);

//     allNotes.push(newNote);

//     fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), err => {
//       if (err) throw err;
//       res.send(db);
//       console.log("Note created!")
//     });
//   });
// });

// router.delete("/notes/:id", (req, res) => {

//   let noteId = req.params.id;

//   fs.readFile("/db/db.json", "utf8", (err, data) => {
//     if (err) throw err;

//     const allNotes = JSON.parse(data);
//     const newAllNotes = allNotes.filter(note => note.id != noteId);

//     fs.writeFile("./db/db.json", JSON.stringify(newAllNotes, null, 2), err => {
//       if (err) throw err;
//       res.send(db);
//       console.log("Note deleted!")
//     });
//   });
// });

module.exports = router;
