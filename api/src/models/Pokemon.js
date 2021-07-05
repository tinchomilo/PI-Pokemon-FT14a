const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vida: {
      type: DataTypes.STRING,
      allowNull: true
    },

    fuerza: {
      type: DataTypes.STRING,
      allowNull: true
    },

    defensa: {
      type: DataTypes.STRING,
      allowNull: true
    },

    velocidad: {
      type: DataTypes.STRING,
      allowNull: true
    },

    altura: {
      type: DataTypes.STRING,
      allowNull: true
    },

    peso: {
      type: DataTypes.STRING,
      allowNull: true
    },

    imagen: {
      type: DataTypes.STRING,
      allowNull: false
  }
  });
};


