const { Schema, model } = require('mongoose');

const parkSchema = new Schema(
  {
    name: { type: String, required: true},
    location: String,
    numberOfCourts: Number,
    playersAtLocation: Number,
    parkFeatures: String,
  },

  {
    timestamps: true,
  }
);

const Park = model('Park', parkSchema);

module.exports = Park;