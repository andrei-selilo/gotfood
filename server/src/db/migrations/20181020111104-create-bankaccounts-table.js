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
      userId: {
        type: Sequelize.STRING,
        references: { model: { tableName: 'users' }, key: 'id' }
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
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bankAccounts');
  }
};
