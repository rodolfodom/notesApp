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
const { isAuthenticated } = require("../helpers/auth");

//new note
router.get("/notes/add", isAuthenticated, renderNotesForm);
router.post("/notes/add", isAuthenticated, createNewNote);

//get all notes
router.get("/notes", isAuthenticated, renderAllNotes);

//edit notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);
router.put("/notes/edit/:id", isAuthenticated, editNote);

//delete notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNotes);

module.exports = router;
