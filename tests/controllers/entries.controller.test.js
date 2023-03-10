const entriesService = require('../../src/services/entries.services');
const entriesController = require('../../src/controllers/entries.controller');

describe('entries.controller', () => {
  describe('getAllEntries', () => {
    it('should return response with status 200 and data when called correctly', async () => {
      jest.spyOn(entriesService, 'getAllEntries').mockResolvedValue('data');
      const req = {
        params: {
          id: 'id',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.getAllEntries(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: 'data' });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(entriesService, 'getAllEntries').mockRejectedValue({
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
      await entriesController.getAllEntries(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('addEntry', () => {
    it('should return response with status 201 and data when called correctly', async () => {
      jest.spyOn(entriesService, 'addEntry').mockResolvedValue('data');
      const req = {
        params: {
          id: 'id',
        },
        body: {
          data: 'data',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.addEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ data: 'data' });
    });
    it('should return response with status 400 and error message when some error in services occur', async () => {
      jest.spyOn(entriesService, 'addEntry').mockResolvedValue(0);
      const req = {
        params: {
          id: 'id',
        },
        body: {
          data: 'data',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.addEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Entry already exists',
      });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(entriesService, 'addEntry').mockRejectedValue({
        message: 'error',
      });
      const req = {
        params: {
          id: 'id',
        },
        body: {
          data: 'data',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.addEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('deleteEntry', () => {
    it('should return response with status 200 and data when called correctly', async () => {
      jest.spyOn(entriesService, 'deleteEntry').mockResolvedValue(1);
      const req = {
        params: {
          id: 1,
        },
        body: {
          index: 1,
          fields: ['fields'],
          value: ['value'],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.deleteEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: 1 });
    });
    it('should return response with status 400 and error message when some error in services occur', async () => {
      jest.spyOn(entriesService, 'deleteEntry').mockResolvedValue(0);
      const req = {
        params: {
          id: 1,
        },
        body: {
          index: 1,
          fields: ['fields'],
          value: ['value'],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.deleteEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Entry cannot be deleted',
      });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(entriesService, 'deleteEntry').mockRejectedValue({
        message: 'error',
      });
      const req = {
        params: {
          id: 1,
        },
        body: {
          index: 1,
          fields: ['fields'],
          value: ['value'],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.deleteEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('updateEntry', () => {
    it('should return response with status 200 and data when called correctly', async () => {
      jest.spyOn(entriesService, 'updateEntry').mockResolvedValue(1);
      const req = {
        params: {
          id: 1,
        },
        body: {
          index: 1,
          fields: ['fields'],
          value: ['value'],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.updateEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: 1 });
    });
    it('should return response with status 400 and error message when some error in services occur', async () => {
      jest.spyOn(entriesService, 'updateEntry').mockResolvedValue(0);
      const req = {
        params: {
          id: 1,
        },
        body: {
          index: 1,
          fields: ['fields'],
          value: ['value'],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.updateEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Entry cannot be updated',
      });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(entriesService, 'updateEntry').mockRejectedValue({
        message: 'error',
      });
      const req = {
        params: {
          id: 1,
        },
        body: {
          index: 1,
          fields: ['fields'],
          value: ['value'],
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await entriesController.updateEntry(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
});
