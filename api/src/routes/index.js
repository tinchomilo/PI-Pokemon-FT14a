const { Router } = require( 'express' )
const pokemonRoutes = require( './pokemons' )
const tiposRoutes = require( './tipos' )

const router = Router()

router.use( '/pokemons', pokemonRoutes)
router.use( '/tipos', tiposRoutes )

module.exports = router;
