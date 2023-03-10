const collectionsService = require('../../src/services/collections.services');
const collectionsController = require('../../src/controllers/collections.controller');

describe('collections.controller', () => {
  describe('getAllCollections', () => {
    it('should return response with status 200 and data when called correctly', async () => {
      jest.spyOn(collectionsService, 'getAllCollections').mockResolvedValue({
        data: 'data',
      });
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.getAllCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: 'data' });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(collectionsService, 'getAllCollections').mockRejectedValue({
        message: 'error',
      });
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.getAllCollections(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('getSingleCollection', () => {
    it('should return response with status 200 and data when called correctly', async () => {
      jest.spyOn(collectionsService, 'getSingleCollection').mockResolvedValue({
        data: 'data',
      });
      const req = {
        params: {
          id: 'id',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.getSingleCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: 'data' });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(collectionsService, 'getSingleCollection').mockRejectedValue({
        message: 'error',
      });
      const req = {
        params: {
          id: 'id',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.getSingleCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('createCollection', () => {
    it('should return response with status 400 and data : false when collection already exists', async () => {
      jest.spyOn(collectionsService, 'createCollection').mockResolvedValue(0);
      const req = {
        body: {
          contentType: 'contentType',
          fields: 'fields',
          values: 'values',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Collection already exists',
        data: false,
      });
    });
    it('should return response with status 201 and data when collection created successfully', async () => {
      jest.spyOn(collectionsService, 'createCollection').mockResolvedValue(1);
      const req = {
        body: {
          contentType: 'contentType',
          fields: 'fields',
          values: 'values',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Collection created successfully',
        data: 1,
      });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(collectionsService, 'createCollection').mockRejectedValue({
        message: 'error',
      });
      const req = {
        body: {
          contentType: 'contentType',
          fields: 'fields',
          values: 'values',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.createCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('renameCollection', () => {
    it('should return response with status 200 and data when collection renamed successfully', async () => {
      jest.spyOn(collectionsService, 'renameCollection').mockResolvedValue(1);
      const req = {
        params: {
          id: 'id',
        },
        body: {
          newContentType: 'newContentType',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.renameCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Collection renamed successfully',
        data: true,
      });
    });
    it('should return response with status 400 and data : false when collection not found', async () => {
      jest.spyOn(collectionsService, 'renameCollection').mockResolvedValue(0);
      const req = {
        params: {
          id: 'id',
        },
        body: {
          newContentType: 'newContentType',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.renameCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Collection does not exist',
        data: false,
      });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(collectionsService, 'renameCollection').mockRejectedValue({
        message: 'error',
      });
      const req = {
        params: {
          id: 'id',
        },
        body: {
          newContentType: 'newContentType',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await collectionsController.renameCollection(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
});
