'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
      },
      clientId: {
        type: Sequelize.STRING,
        references: { model: { tableName: 'users' }, key: 'id' }
      },
      sellerId: {
        type: Sequelize.STRING,
        references: { model: { tableName: 'users' }, key: 'id' }
      },
      itemIds: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      amount: {
        type: Sequelize.INTEGER
      },
      courierId: {
        type: Sequelize.STRING,
        references: { model: { tableName: 'users' }, key: 'id' }
      },
      deliveryStart: {
        type: Sequelize.DATE
      },
      deliveryEnd: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING(200)
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
    .then(() => {
      return queryInterface.addIndex('orders', ['clientId'],
        {
          indexName: 'orderClientId',
          indicesType: 'UNIQUE'
        }
      )
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};
