'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Places', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      lat: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      long: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      isExamining: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },);

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('places');
  }
};
