const fieldsService = require('../../src/services/fields.services');
const fieldsController = require('../../src/controllers/fields.controller');

describe('fields.controller', () => {
  describe('getAllFields', () => {
    it('should return response with status 200 and data when called correctly', async () => {
      jest.spyOn(fieldsService, 'getAllFields').mockResolvedValue('data');
      const req = {
        params: {
          id: 'id',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.getAllFields(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: 'data' });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(fieldsService, 'getAllFields').mockRejectedValue({
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
      await fieldsController.getAllFields(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('deleteField', () => {
    it('should return response with status 200 and data when called correctly', async () => {
      jest.spyOn(fieldsService, 'deleteField').mockResolvedValue('data');
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.deleteField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: 'data' });
    });
    it('should return response with status 400 and error message when some error in services occur', async () => {
      jest.spyOn(fieldsService, 'deleteField').mockResolvedValue(0);
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.deleteField(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Field cannot be deleted',
      });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(fieldsService, 'deleteField').mockRejectedValue({
        message: 'error',
      });
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.deleteField(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('addField', () => {
    it('should return response with status 201 and data when called correctly', async () => {
      jest.spyOn(fieldsService, 'addField').mockResolvedValue(1);
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.addField(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ data: 1 });
    });
    it('should return response with status 400 and error message when some error in services occur', async () => {
      jest.spyOn(fieldsService, 'addField').mockResolvedValue(0);
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.addField(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Field already exists',
      });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(fieldsService, 'addField').mockRejectedValue({
        message: 'error',
      });
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.addField(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
  describe('renameField', () => {
    it('should return response with status 200 and data when called correctly', async () => {
      jest.spyOn(fieldsService, 'renameField').mockResolvedValue(1);
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
          newField: 'newField',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.renameField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: 1 });
    });
    it('should return response with status 400 and error message when some error in services occur', async () => {
      jest.spyOn(fieldsService, 'renameField').mockResolvedValue(0);
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
          newField: 'newField',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.renameField(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Field cannot be renamed',
      });
    });
    it('should return response with status 500 and error message when some error in services occur', async () => {
      jest.spyOn(fieldsService, 'renameField').mockRejectedValue({
        message: 'error',
      });
      const req = {
        params: {
          id: 'id',
        },
        body: {
          field: 'field',
          newField: 'newField',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await fieldsController.renameField(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'error' });
    });
  });
});
