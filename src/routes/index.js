const { Router } = require('express');
const collectionsRouter = require('./collections.routes');

const router = Router();

router.use('/collections', collectionsRouter);

module.exports = router;
