const joi = require('joi');

const getCollectionSchema = joi.object({
  id: joi.number().required(),
});

const postCollectionSchema = joi.object({
  contentType: joi.string().required(),
  fields: joi.array(),
  values: joi.array(),
});

const patchCollectionParamSchema = joi.object({
  id: joi.number().required(),
});

const patchCollectionBodySchema = joi.object({
  contentType: joi.string().required(),
});

const getAllEntriesSchema = joi.object({
  id: joi.number().required(),
});

const postEntryParamSchema = joi.object({
  id: joi.number().required(),
});

const postEntryBodySchema = joi.object({
  fields: joi.array().required(),
  values: joi.array().required(),
});

const deleteEntryParamSchema = joi.object({
  id: joi.number().required(),
});

const deleteEntryBodySchema = joi.object({
  index: joi.number().required(),
});

const patchEntryParamSchema = joi.object({
  id: joi.number().required(),
});

const patchEntryBodySchema = joi.object({
  index: joi.number().required(),
  fields: joi.array().required(),
  values: joi.array().required(),
});

const getAllFieldsSchema = joi.object({
  id: joi.number().required(),
});

const postFieldParamSchema = joi.object({
  id: joi.number().required(),
});

const postFieldBodySchema = joi.object({
  field: joi.string().required(),
});

const deleteFieldParamSchema = joi.object({
  id: joi.number().required(),
});

const deleteFieldBodySchema = joi.object({
  field: joi.string().required(),
});

const patchFieldParamSchema = joi.object({
  id: joi.number().required(),
});

const patchFieldBodySchema = joi.object({
  field: joi.string().required(),
  newField: joi.string().required(),
});

module.exports = {
  getCollectionSchema,
  postCollectionSchema,
  patchCollectionParamSchema,
  patchCollectionBodySchema,
  getAllEntriesSchema,
  postEntryParamSchema,
  postEntryBodySchema,
  deleteEntryParamSchema,
  deleteEntryBodySchema,
  patchEntryParamSchema,
  patchEntryBodySchema,
  getAllFieldsSchema,
  postFieldParamSchema,
  postFieldBodySchema,
  deleteFieldParamSchema,
  deleteFieldBodySchema,
  patchFieldParamSchema,
  patchFieldBodySchema,
};
