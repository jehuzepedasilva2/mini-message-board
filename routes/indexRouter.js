const { Router } = require('express');
const getEJS = require('../controllers/indexController');
const userRouter = Router();

userRouter.get('/', getEJS)

module.exports = userRouter;

