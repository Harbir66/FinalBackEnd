'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('collections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contentType: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      fields: {
        defaultValue: [],
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      values: {
        defaultValue: [],
        type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.STRING)),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('collections');
  },
};
