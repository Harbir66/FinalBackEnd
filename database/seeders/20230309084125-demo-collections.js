'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('collections', [
      {
        contentType: 'users',
        fields: ['name', 'email', 'password'],
        values: [
          ['name:John Doe', 'email:abc@abc.com', 'password:password'],
          ['name:Jane Doe', 'email:abc@abc.com', 'password:password'],
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentType: 'posts',
        fields: ['title', 'body', 'userId'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contentType: 'comments',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('collections', null, {});
  },
};
