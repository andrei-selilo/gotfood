'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('options', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      name: {
        type: Sequelize.STRING(150)
      },
      description: {
        type: Sequelize.STRING(500)
      },
      value: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING(150)
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
      .then(() => {
        return queryInterface.addIndex('options', ['name'],
          {
            indexName: 'optionName',
            indicesType: 'UNIQUE'
          }
        )
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('options');
  }
};
