const { DataTypes } = require( 'sequelize' );

module.exports = ( sequalize ) => {
    sequalize.define( 'tipo', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }        
    })
}