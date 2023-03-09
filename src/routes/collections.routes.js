const { Router } = require('express');
const collectionsController = require('../controllers/collections.controller');
const { validator } = require('../middlewares/collectionRequest.validator');

const {
  getCollectionSchema,
  postCollectionSchema,
  patchCollectionParamSchema,
  patchCollectionBodySchema,
} = require('../middlewares/schemas.validator');

const collectionsRouter = Router();

collectionsRouter.get('/', collectionsController.getAllCollections);
collectionsRouter.get(
  '/:id',
  validator(getCollectionSchema, 'params'),
  collectionsController.getSingleCollection
);
collectionsRouter.post(
  '/',
  validator(postCollectionSchema, 'body'),
  collectionsController.createCollection
);
collectionsRouter.patch(
  '/:id',
  validator(patchCollectionBodySchema, 'body'),
  validator(patchCollectionParamSchema, 'params'),
  collectionsController.renameCollection
);

module.exports = collectionsRouter;
