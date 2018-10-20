'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      name: {
        type: Sequelize.STRING(80)
      },
      lastName: {
        type: Sequelize.STRING(80)
      },
      email: {
        type: Sequelize.STRING(150)
      },
      phone: {
        type: Sequelize.STRING(30)
      },
      birthday: {
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING(60)
      },
      regionId: {
        type: Sequelize.STRING(30),
        references: { model: {tableName: 'regions'}, key: 'id' }
      },
      status: {
        type: Sequelize.STRING(30)
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      info: {
        type: Sequelize.JSONB,
        defaultValue: {}
      },
      privateInfo: {
        type: Sequelize.JSONB,
        defaultValue: {}
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
      .then(() => {
        return queryInterface.addIndex('users', ['email'],
          {
            indexName: 'userEmail',
            indicesType: 'UNIQUE'
          }
        )
      })
      .then(() => {
        return queryInterface.addIndex('users', ['phone'],
          {
            indexName: 'userPhone',
            indicesType: 'UNIQUE'
          }
        )
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
