const { Pokemon } =  require( '../db' );
const { Tipo } = require( '../db' );
const router  = require( 'express' ).Router();
const axios = require( 'axios' );


router.get( '/', async function( req, res ) {
    
    try {
        const { name } = req.query    

        if( name ){
            const pokesTable = await Pokemon.findOne({where: {name: name}})            
            if( pokesTable !== null ){ 
                return res.json( pokesTable )                
            } else { 
                const { data } = await axios.get( `https://pokeapi.co/api/v2/pokemon/${ name }` )
                if( data ){
                    console.log(data)
                    const resApi = {
                        name: data.name,
                        health: data.stats[0].base_stat,
                        strength: data.stats[1].base_stat,
                        defence: data.stats[2].base_stat,
                        speed: data.stats[5].base_stat,
                        height: data.height,
                        weight: data.weight,
                        img: data.sprites.other.dream_world.front_default,
                        type: data.types.map( (elem) => elem.type.name)
                    }
                    return res.json(resApi)
                }                                      
           }
        }

        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        const response = data.results.map( ( elem ) => axios.get(elem.url))
        const result = ( await Promise.all(response)).map( elem => { 
            return {
            name: elem.data.name,
            id: elem.data.id,
            health: elem.data.stats[0].base_stat,
            strength: elem.data.stats[1].base_stat,
            defence: elem.data.stats[2].base_stat,
            speed: elem.data.stats[5].base_stat,
            height: elem.data.height,
            weight: elem.data.weight,
            img: elem.data.sprites.other.dream_world.front_default,
            type: elem.data.types.map( (elem) => elem.type.name),
        }})
        const pokemones = await Pokemon.findAll({ include: Tipo });
        const show = [...result, ...pokemones]
        return res.json( show );

    } catch ( error ) {
        return res.status(404).json( 'el pokemon es inexistente' )
    }    
});

router.get( '/:pokemonId', async function( req, res ) {
    
    try {
        const { pokemonId } = req.params;        
        if( pokemonId.length < 10 ){
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

router.post( '/', async function( req, res ) {
    
    try {        
        const { name, strength, defence, height, weight, speed, health, type1, type2  } = req.body
        
        if( !name || !type1 ) 
            return res.status(404).json( 'Es necesario ingresar nombre y tipo' )
            
       const newPokemon = await Pokemon.create( { name, strength, defence, height, weight, speed, health } )
       newPokemon.setTipos(type1)

      if( type2 )
         newPokemon.setTipos(type2)

        return res.send( newPokemon )

    } catch (error) {
        return res.json( error )
    }  
})

module.exports = router;