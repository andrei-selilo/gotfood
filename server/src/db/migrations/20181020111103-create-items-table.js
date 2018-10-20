'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      userId: {
        type: Sequelize.STRING(30),
        references: { model: { tableName: 'users' }, key: 'id' }
      },
      name: {
        type: Sequelize.STRING(64)
      },
      type: {
        type: Sequelize.STRING(64)
      },
      description: {
        type: Sequelize.STRING(500)
      },
      points: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('items');
  }
};
