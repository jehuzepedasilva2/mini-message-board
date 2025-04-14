const { Router } = require('express');
const messageRouter = Router();
const getEJS = require('../controllers/messageController');


messageRouter.get('/:id', getEJS)

module.exports = messageRouter;