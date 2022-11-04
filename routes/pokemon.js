var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Show favorites pokemons
router.get("/favorites", pokemonController.showFavorites);

router.get('/:name', pokemonController.index);
router.post('/:name', pokemonController.createPokemon);
router.delete('/:name', pokemonController.deletePokemon);
router.put('/:name', pokemonController.commentaryPokemon);

module.exports = router;
