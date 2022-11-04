const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
})

const Favorite = mongoose.model('Favori', favoriteSchema);

module.exports = Favorite;