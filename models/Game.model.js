const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
  {
    rules: String,
    teamsSize: Number,
    startTime: String,
    
  }
);

const Game = model('Game', gameSchema);

module.exports = Game;