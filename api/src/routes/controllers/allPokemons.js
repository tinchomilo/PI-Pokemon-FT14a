// const router = require( 'express').Router();
// const { Pokemon } = require('../../db');
// const { Tipo } = require( '../../db' );
// const axios = require( 'axios' );

// const allPokes = async function( req, res ) {
    
//     try {
//         const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')
//         const result = data.results             
//         //aca tendria que acceder a cada url de pokemon para obtener la imagen y nombre o se hace del front
//         const pokemones = await Pokemon.findAll({ include: Tipo });
//         const show = [...result, ...pokemones]
//         return res.json( show );

//     } catch ( error ) {
//         return res.status(500).json( error )
//     }    
// };

// module.exports = router; 