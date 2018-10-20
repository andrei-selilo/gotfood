'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('regions', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      country: {
        type: Sequelize.STRING(128)
      },
      state: {
        type: Sequelize.STRING(128)
      },
      currency: {
        type: Sequelize.STRING(32)
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('regions');
  }
};
