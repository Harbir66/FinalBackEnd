const collectionService = require('../../src/services/collections.services');
const { collections } = require('../../database/models');

describe('collections.services', () => {
  describe('getAllCollections', () => {
    it('should return an array of objects', async () => {
      jest
        .spyOn(collections, 'findAll')
        .mockResolvedValue([{ abc: 'abc' }, { def: 'def' }]);
      const data = await collectionService.getAllCollections();
      expect(data).toEqual([{ abc: 'abc' }, { def: 'def' }]);
    });
    it('should return an empty array when there is no data', async () => {
      jest.spyOn(collections, 'findAll').mockResolvedValue(null);
      const data = await collectionService.getAllCollections();
      expect(data).toEqual([]);
    });
  });
  describe('getSingleCollection', () => {
    it('should return an object', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({ abc: 'abc' });
      const data = await collectionService.getSingleCollection(1);
      expect(data).toEqual({ abc: 'abc' });
    });
    it('should return an empty object when there is no data', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue(null);
      const data = await collectionService.getSingleCollection(1);
      expect(data).toEqual({});
    });
  });
  describe('createCollection', () => {
    it('should return created object when an object is created successfully', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue(null);
      jest.spyOn(collections, 'create').mockResolvedValue({ abc: 'abc' });
      const data = await collectionService.createCollection(
        'test',
        '["one","two","three"]',
        '["one","two","three"]'
      );
      expect(data).toEqual({ abc: 'abc' });
    });
    it('should return 0 when the collection with same name already exists', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({ abc: 'abc' });
      const data = await collectionService.createCollection(
        'test',
        '["one","two","three"]',
        '["one","two","three"]'
      );
      expect(data).toEqual(0);
    });
  });
  describe('renameCollection', () => {
    it('should return 1 when the collection is renamed successfully', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue({ abc: 'abc' });
      jest.spyOn(collections, 'update').mockResolvedValue([1]);
      const data = await collectionService.renameCollection(1, 'test');
      expect(data).toEqual([1]);
    });
    it('should return 0 when the collection with same name already exists', async () => {
      jest.spyOn(collections, 'findOne').mockResolvedValue(null);
      const data = await collectionService.renameCollection(1, 'test');
      expect(data).toEqual(0);
    });
  });
});
