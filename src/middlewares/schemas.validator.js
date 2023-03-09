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

// const saveCompanySchema = joi.object({
//   urlLink: joi.string().uri().required(),
// });

// const getCompanyQuerySchema = joi.object({
//   sector: joi.string().required(),
// });

// const updateCompanyParamSchema = joi.object({
//   companyId: joi.string().uuid().required(),
// });

// const updateCompanyBodySchema = joi.object({
//   ceoName: joi.string().required(),
// });
module.exports = {
  getCollectionSchema,
  postCollectionSchema,
  patchCollectionParamSchema,
  patchCollectionBodySchema,
  //   saveCompanySchema,
  //   getCompanyQuerySchema,
  //   updateCompanyParamSchema,
  //   updateCompanyBodySchema,
};
