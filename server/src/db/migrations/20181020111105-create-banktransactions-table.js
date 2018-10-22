'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bankTransactions', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      type: {
        type: Sequelize.STRING(80)
      },
      status: {
        type: Sequelize.STRING(30)
      },
      amount: {
        type: Sequelize.INTEGER
      },
      fromBankAccountId: {
        type: Sequelize.STRING,
        references: { model: { tableName: 'bankAccounts' }, key: 'id' }
      },
      toBankAccountId: {
        type: Sequelize.STRING,
        references: { model: { tableName: 'bankAccounts' }, key: 'id' }
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
    return queryInterface.dropTable('bankTransactions');
  }
};
