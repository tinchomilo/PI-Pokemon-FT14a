const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('pokemon', {
    id: { 
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    health: {
      type: DataTypes.STRING,
      allowNull: true
    },

    strength: {
      type: DataTypes.STRING,
      allowNull: true
    },

    defence: {
      type: DataTypes.STRING,
      allowNull: true
    },

    speed: {
      type: DataTypes.STRING,
      allowNull: true
    },

    height: {
      type: DataTypes.STRING,
      allowNull: true
    },

    weight: {
      type: DataTypes.STRING,
      allowNull: true
    },

    img: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  
};


