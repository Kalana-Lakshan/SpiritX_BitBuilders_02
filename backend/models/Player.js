const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    university: String,
    category: String,
    totalRuns: Number,
    ballsFaced: Number,
    inningsPlayed: Number,
    wickets: Number,
    oversBowled: Number,
    runsConceded: Number
});

module.exports = mongoose.model('Player', playerSchema);
