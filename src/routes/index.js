const { Router } = require('express');
const collectionsRouter = require('./collections.routes');
const fieldsRouter = require('./fields.routes');
const entriesRouter = require('./entries.routes');
// const authTokenValidator = require('../middlewares/authToken.validator');

const router = Router();

router.use(
  '/collections',
  //   authTokenValidator.authTokenValidation,
  collectionsRouter
);
router.use(
  '/fields',
  //   authTokenValidator.authTokenValidation,
  fieldsRouter
);
router.use(
  '/entries',
  //   authTokenValidator.authTokenValidation,
  entriesRouter
);

module.exports = router;
