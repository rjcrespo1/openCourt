const { Schema, model } = require('mongoose');

const courtSchema = new Schema(
  {
    location: String,
    numberOfCourts: Number,
    playersAtLocation: Number,
    indoorsOrOutdoors: String,
  },

  {
    timestamps: true,
  }
);

const Court = model('Court', courtSchema);

module.exports = Court;