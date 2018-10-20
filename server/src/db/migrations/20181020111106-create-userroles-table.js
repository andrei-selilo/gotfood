'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userRoles', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      name: {
        type: Sequelize.STRING(64)
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
      .then(() => {
        return queryInterface.addIndex('userRoles', ['name'],
          {
            indexName: 'userRoleName',
            indicesType: 'UNIQUE'
          }
        )
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('userRoles');
  }
};
