const { Router } = require('express');
const collectionsController = require('../controllers/collections.controller');

const collectionsRouter = Router();

collectionsRouter.get('/', collectionsController.getAllCollections);
collectionsRouter.get('/:id', collectionsController.getSingleCollection);
collectionsRouter.post('/', collectionsController.createCollection);
collectionsRouter.patch('/:id', collectionsController.renameCollection);

module.exports = collectionsRouter;
