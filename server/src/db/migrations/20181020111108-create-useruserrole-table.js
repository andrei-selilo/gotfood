'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userUserRole', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      userId: {
        type: Sequelize.STRING,
        references: { model: { tableName: 'users' }, key: 'id' }
      },
      userRoleId: {
        type: Sequelize.STRING,
        references: { model: { tableName: 'userRoles' }, key: 'id' }
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
    return queryInterface.dropTable('userUserRole');
  }
};
