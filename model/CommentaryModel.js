const mongoose = require('mongoose');

const commentarySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    comment: String
})

const Commentary = mongoose.model('Commentaire', commentarySchema);

module.exports = Commentary;