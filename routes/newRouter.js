const { Router } = require('express');
const newRouter = Router();
const { getEJS, pushNew } = require('../controllers/newController');

newRouter.get('/', getEJS);
newRouter.post('/', pushNew);

module.exports = newRouter;