const { collections } = require('../../database/models');
const stringUtils = require('../../src/utils/stringUtils');
const fieldsServices = require('../../src/services/fields.services');

describe('fields.services', () => {
  describe('getAllFields', () => {
    it('should return an array of all the fields when called correctly', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({
        fields: ['one', 'two', 'three'],
      });
      const result = await fieldsServices.getAllFields(1);
      expect(result).toEqual({
        fields: ['one', 'two', 'three'],
      });
    });
    it('should return an empty array when there is no data', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue(null);
      const result = await fieldsServices.getAllFields(1);
      expect(result).toEqual([]);
    });
  });
  describe('addField', () => {
    it('should return successfully add field to the database when called correctly', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          fields: ['one', 'two'],
        },
      });
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.addField(1, 'three');
      expect(result).toEqual(1);
    });
    it('should return successfully add field to the database when original fields is null', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.addField(1, 'three');
      expect(result).toEqual(1);
    });
    it('should return 0 when the field already exists', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          fields: ['one', 'two'],
        },
      });
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.addField(1, 'one');
      expect(result).toEqual(0);
    });
  });
  describe('deleteField', () => {
    it('should successfully delete field from the database when called correctly', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          fields: ['one', 'two'],
        },
      });
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.deleteField(1, 1);
      expect(result).toEqual(1);
    });
    it('should return 0 when the field does not exist', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.deleteField(1, 3);
      expect(result).toEqual(0);
    });
    it('should successfully execute when entries field is of length zero', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          fields: ['one', 'two'],
        },
      });
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: [],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.deleteField(1, 1);
      expect(result).toEqual(1);
    });
  });
  describe('renameField', () => {
    it('should successfully rename field in the database when called correctly', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          fields: ['one', 'two'],
        },
      });
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: ['["one:1,two:2,four:3"]', '["one:4,two:5,four:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.renameField(1, 'two', 'three');
      expect(result).toEqual(1);
    });
    it('should return 0 when the field does not exist', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce(null);
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.renameField(1, 3, 'three');
      expect(result).toEqual(0);
    });
    it('should execute successfully when entries length is zero', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          fields: ['one', 'two'],
        },
      });
      jest.spyOn(collections, 'findOne').mockResolvedValueOnce({
        dataValues: {
          values: [],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await fieldsServices.renameField(1, 'two', 'three');
      expect(result).toEqual(1);
    });
  });
});
