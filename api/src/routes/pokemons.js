const { Pokemon } =  require( '../db' );
const { Tipo } = require( '../db' );
const router  = require( 'express' ).Router();
const axios = require( 'axios' );



router.get( '/', async function( req, res ) {
    
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')
        const result = data.results             
        //aca tendria que acceder a cada url de pokemon para obtener la imagen y nombre o se hace del front?
        const pokemones = await Pokemon.findAll({ include: Tipo });
        const show = [...result, ...pokemones]
        return res.json( show );

    } catch ( error ) {
        return res.status(500).json( error )
    }    
});

router.get( '/:pokemonId', async function( req, res ) {
    try {
        const { pokemonId } = req.params;
        const { name } = req.body;
        console.log( '---->', name );
        if( parseInt( pokemonId ) ){
        const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon/${ pokemonId }` )
        
        const resultApi = { 
            name: data.name,
            type: data.types.map( ( elem ) => elem.type.name ),
            img: data.sprites.other.dream_world.front_default            
        }
            return res.json( resultApi );
    } else {
        const resultTable = await Pokemon.findOne( {
            where : {
                id: pokemonId
            }
        } );          
            return res.json( resultTable );
         }
    }
     catch ( error ) {
        return res.json( error )
    }    
})

// router.get( '/', function( req, res ) {
//     const { name } = req.query
//     console.log( name )
//     res.json( 'se recibe nombre correctamente')
// })


router.post( '/', async function( req, res ) {
    try {        
        const { name, tipo } = req.body        
        if( !name ) 
            return res.status(404).json( 'Es necesario ingresar un nombre' )

        const newType = await Tipo.findOne({
            where: {
                name: tipo
            }
        }) 

        if( newType === null )
             return res.sendStatus(404)  
        
        const newPokemon = await Pokemon.create( { name /*img predefinida */} )
        await newPokemon.addTipo( newType )
        return res.json( 'pokemon creado con exito' )

    } catch (error) {
        return res.json( error )
    }  
})
module.exports = router;    


//get('/:pokemonId')
// try {
//     const { pokemonId } = req.params;
//     if( pokemonId.length < 10 ){
//     const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon/${ pokemonId }` )
    
//     const resultApi = { 
//         name: data.name,
//         type: data.types.map( ( elem ) => elem.type.name ),
//         img: data.sprites.other.dream_world.front_default            
//     }
//         return res.json( resultApi );
// } else {
//     const resultTable = await Pokemon.findOne( {
//         where : {
//             id: pokemonId
//         }
//     } );          
//         return res.json( resultTable );
//      }
// }
//  catch ( error ) {
//     return res.json( error )
// }    