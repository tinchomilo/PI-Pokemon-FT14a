const { Pokemon } =  require( '../db' );
const { Tipo } = require( '../db' );
const router  = require( 'express' ).Router();
const axios = require( 'axios' );

router.get( '/', async function( req, res ) {
    
        const { name } = req.query    
       
    try {
        if( name ) {
            
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
        
         let result = await axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=22")
            .then((res) => {
                return res.data.results
            })
            .then((results) => {
                return Promise.all(results.map((res) => axios.get(res.url)))
            })
            .then((results) => {                
                return results.map((res) => {
                    return {
                        name: res.data.name,
                        id: res.data.id,
                        img: res.data.sprites.other.dream_world.front_default,
                        type: res.data.types.map( (elem) => elem.type.name),
                    }
                } )
            } )
       
        const pokemones = await Pokemon.findAll({ include: Tipo });
        const show = [...result, ...pokemones]
        
        let page = Number( req.query[0] ) || 0
       
        let from = page * 12;
        let paginated = show.slice(from, from + 12)

        return res.json( { page, paginated } );

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
            img: data.sprites.other.dream_world.front_default,
            id: data.id,
            health: data.stats[0].base_stat,
            strength: data.stats[1].base_stat,
            defence: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight
        }
            return res.json( resultApi );
    } else {
        const resultTable = await Pokemon.findOne( {
            where : {
                id: pokemonId
            },
            include: Tipo 
        } );          
        console.log(resultTable)
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