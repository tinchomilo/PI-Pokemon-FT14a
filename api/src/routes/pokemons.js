const { Pokemon } = require( '../models' )
const router = require( 'express' ).Router();

router.get( '/', async function( req, res, next ) {
    const pokemones = await Pokemons.findAll();
    res.json(pokemones);
});

router.get( '/:pokemonId', async function( req, res, next ) {
    const { pokemonId } = req.params;
    const result = await Pokemon.findOne( {
        where : {
            pokemonId: pokemonId
        }
    })
    res.json( result )
})