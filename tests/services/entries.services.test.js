const stringUtils = require('../../src/utils/stringUtils');
const { collections } = require('../../database/models');
const entriesService = require('../../src/services/entries.services');

describe('entries.services', () => {
  describe('getAllEntries', () => {
    it('should return an array of all the entries when called correctly', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({
        values: ['one:1,two:2,three:3', 'four:4,five:5,six:6'],
      });
      const result = await entriesService.getAllEntries(1);
      expect(result).toEqual({
        values: ['one:1,two:2,three:3', 'four:4,five:5,six:6'],
      });
    });
    it('should return an empty array when there is no data', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue(null);
      const result = await entriesService.getAllEntries(1);
      expect(result).toEqual([]);
    });
  });
  describe('addEntry', () => {
    it('should return successfully add entry to the database when called correctly', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await entriesService.addEntry(1, ['one', 'two'], [1, 2]);
      expect(result).toEqual(1);
    });
  });
  describe('deleteEntry', () => {
    it('should successfully delete entry from the database when called correctly', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await entriesService.deleteEntry(1, 1);
      expect(result).toEqual(1);
    });
    it('should return 0 when the index is out of bounds', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await entriesService.deleteEntry(1, 2);
      expect(result).toEqual(0);
    });
    it('should return 0 when there is no data', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue(null);
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await entriesService.deleteEntry(1, 1);
      expect(result).toEqual(0);
    });
  });
  describe('updateEntry', () => {
    it('should successfully update entry in the database when called correctly', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await entriesService.updateEntry(
        1,
        1,
        ['one', 'two'],
        [1, 2]
      );
      expect(result).toEqual(1);
    });
    it('should return 0 when the index is out of bounds', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({
        dataValues: {
          values: ['["one:1,two:2,three:3"]', '["four:4,five:5,six:6"]'],
        },
      });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await entriesService.updateEntry(
        1,
        2,
        ['one', 'two'],
        [1, 2]
      );
      expect(result).toEqual(0);
    });
    it('should return 0 when there is no data', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue(null);
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const result = await entriesService.updateEntry(
        1,
        1,
        ['one', 'two'],
        [1, 2]
      );
      expect(result).toEqual(0);
    });
  });
});
