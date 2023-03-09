const { Router } = require('express');
const fieldsController = require('../controllers/fields.controller');
const { validator } = require('../middlewares/collectionRequest.validator');

const {
  getAllFieldsSchema,
  postFieldParamSchema,
  postFieldBodySchema,
  deleteFieldParamSchema,
  deleteFieldBodySchema,
  patchFieldParamSchema,
  patchFieldBodySchema,
} = require('../middlewares/schemas.validator');

const fieldsRouter = Router();

fieldsRouter.get(
  '/:id',
  validator(getAllFieldsSchema, 'params'),
  fieldsController.getAllFields
);
fieldsRouter.post(
  '/:id',
  validator(postFieldBodySchema, 'body'),
  validator(postFieldParamSchema, 'params'),
  fieldsController.addField
);
fieldsRouter.delete(
  '/:id',
  validator(deleteFieldParamSchema, 'params'),
  validator(deleteFieldBodySchema, 'body'),
  fieldsController.deleteField
);
fieldsRouter.patch(
  '/:id',
  validator(patchFieldParamSchema, 'params'),
  validator(patchFieldBodySchema, 'body'),
  fieldsController.renameField
);

module.exports = fieldsRouter;
