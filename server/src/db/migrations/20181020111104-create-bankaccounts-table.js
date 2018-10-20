'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bankAccounts', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      type: {
        type: Sequelize.STRING(64)
      },
      name: {
        type: Sequelize.STRING(64)
      },
      currency: {
        type: Sequelize.STRING(64)
      },
      data: {
        type: Sequelize.JSONB,
        defaultValue: {}
      },
      active: {
        type: Sequelize.BOOLEAN
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bankAccounts');
  }
};
