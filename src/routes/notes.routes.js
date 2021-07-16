const { Router } = require("express");
const router = Router();

const {
  renderNotesForm,
  createNewNote,
  renderAllNotes,
  renderEditForm,
  editNote,
  deleteNotes,
} = require("../controllers/notes.controller");

//new note
router.get("/notes/add", renderNotesForm);
router.post("/notes/add", createNewNote);

//get all notes
router.get("/notes", renderAllNotes);

//edit notes
router.get("/notes/edit/:id", renderEditForm);
router.put("/notes/edit/:id", editNote);

//delete notes
router.delete("/notes/delete/:id", deleteNotes);

module.exports = router;
