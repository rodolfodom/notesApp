const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desceiption: String,
  },
  {
    timestamps: true,
  }
);

model.exports = model("Note", noteSchema);
