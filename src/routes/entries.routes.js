const { Router } = require('express');
const entriesController = require('../controllers/entries.controller');
const { validator } = require('../middlewares/collectionRequest.validator');

const {
  getAllEntriesSchema,
  postEntryBodySchema,
  postEntryParamSchema,
  deleteEntryParamSchema,
  deleteEntryBodySchema,
  patchEntryParamSchema,
  patchEntryBodySchema,
} = require('../middlewares/schemas.validator');

const entriesRouter = Router();

entriesRouter.get(
  '/:id',
  validator(getAllEntriesSchema, 'params'),
  entriesController.getAllEntries
);
entriesRouter.post(
  '/:id',
  validator(postEntryBodySchema, 'body'),
  validator(postEntryParamSchema, 'params'),
  entriesController.addEntry
);
entriesRouter.delete(
  '/:id',
  validator(deleteEntryParamSchema, 'params'),
  validator(deleteEntryBodySchema, 'body'),
  entriesController.deleteEntry
);
entriesRouter.patch(
  '/:id',
  validator(patchEntryParamSchema, 'params'),
  validator(patchEntryBodySchema, 'body'),
  entriesController.updateEntry
);

module.exports = entriesRouter;
