const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
  {
    date: String,
    startTime: String,
    parkAddress: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
  },

  {
    timestamps: true,
  }
);

const Game = model('Game', gameSchema);

module.exports = Game;