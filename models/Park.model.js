const { Schema, model } = require('mongoose');

const parkSchema = new Schema(
  {
    name: { type: String, required: true},
    location: { type: { type: String }, coordinates: [Number] },
    numberOfCourts: Number,
  },

  {
    timestamps: true,
  }
);

parkSchema.index({ location: '2dsphere' });

const Park = model('Park', parkSchema);

module.exports = Park;