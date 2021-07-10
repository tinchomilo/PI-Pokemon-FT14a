const { Tipo } =  require( '../db' );
const router  = require( 'express' ).Router();
const axios = require( 'axios' );

router.get( '/', async function( req, res )  {
    
    try {
        // lo uso una vez para precargar la tabla con los tipos de pokemon
        // const { data } = await axios.get("https://pokeapi.co/api/v2/type")
              
        // tipos = data.results.map( ( tipo ) => ( Tipo.create( {name: tipo.name} ) ) )

        const resp = await Tipo.findAll();
        res.json( resp )    
    } catch ( error ) {
        return res.json( error )
    }
});

module.exports = router;