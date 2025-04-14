const { Router } = require('express');
const getEJS = require('../controllers/indexController');
const indexRouter = Router();

indexRouter.get('/', getEJS)

module.exports = indexRouter;

