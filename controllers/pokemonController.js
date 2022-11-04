const Favorite = require('../model/FavoriteModel');
const Commentary = require('../model/CommentaryModel');

// Get pokemon by name
const index = async (req, res) => {
    const { name } = req.params;

    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await pokemonData.json();
    console.log('pokemon: ', pokemon);
    const isFavorite = await Favorite.find({ name });
    const commentary = await Commentary.findOne({ name });
    
    res.render("pokemon", { 
        pokemon, 
        isFavorite: isFavorite.length > 0, 
        commentary: commentary?.comment || "",
        types: pokemon.types
    });
}

// Create a pokemon
const createPokemon = async (req, res) => {
    const { name } = req.params;
    await Favorite.create({ name });

    return res.status(200).send("Create pokemon : OK");
}

// Delete a pokemon
const deletePokemon = async (req, res) => {
    const { name } =  req.params;
    await Favorite.deleteMany({ name })

    return res.status(200).send("Delete pokemon : OK");
}

// Add commentary to a pokemon or update it if it's already exists
const commentaryPokemon = async (req, res) => {
    const { name } = req.params;
    const { comment } = req.body;

    const result = await Commentary.findOneAndUpdate({ name }, { comment });
    
    if (!result) {
        await Commentary.create({ name, comment })
        return res.status(200).send("Create commentary if it's not exists : OK");
    }

    res.status(200).send("Update commentary : OK");
}

// Show list of favorites pokemons
const showFavorites = async (req, res) => {
    const favoriteList = await Favorite.find();

    res.render("favorites", { favoriteList });
}

module.exports = {
    index,
    createPokemon,
    deletePokemon,
    commentaryPokemon,
    showFavorites
}