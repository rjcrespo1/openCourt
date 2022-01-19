const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
  {
    startTime: String,
    park: {type: Schema.Types.ObjectId, ref: 'Park'},
    
  },

  {
    timestamps: true,
  }
);

const Game = model('Game', gameSchema);

module.exports = Game;