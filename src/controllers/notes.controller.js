const notesController = {};

const Note = require("../models/Note");

notesController.renderNotesForm = (req, res) => {
  res.render("notes/new-note");
};

notesController.createNewNote = async (req, res) => {
  const { title, description } = req.body;

  const newNote = new Note({ title, description });
  await newNote.save();
  req.flash("success_msg", "Note added successfully");

  res.redirect("/notes");
};

notesController.renderAllNotes = async (req, res) => {
  const notes = await Note.find().lean();

  res.render("notes/all-notes", { notes });
};

notesController.renderEditForm = async (req, res) => {
  const noteToEdit = await Note.findById(req.params.id).lean();
  res.render("notes/edit-notes", { noteToEdit });
};

notesController.editNote = async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Note updated successfully");
  res.redirect("/notes");
};

notesController.deleteNotes = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note deleted successfully");

  res.redirect("/notes");
};

module.exports = notesController;
