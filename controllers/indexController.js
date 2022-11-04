const index = (req, res) => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(data => {
            res.render('index', { 
                title: 'Pokédex de la 1ère génération',
                pokemon: data.results
            });
        }
    );
}

module.exports = {
    index
}