const { v4: uuidv4 }  = require('uuid');

const { 
  messages, 
  formatDate,
  assignRotationAndColor,
} = require('../db');

function getEJS(req, res) {
  res.render('templates/form');
}

function pushNew(req, res) {
  const d = new Date()
  const newMessage = { 
    id: uuidv4(),
    text: req.body.userMessage, 
    user:  req.body.userName, 
    added: d, 
    formattedDate: formatDate(d) 
  };
  assignRotationAndColor(newMessage);
  messages.push(newMessage);
  res.redirect('/');
}

module.exports = { 
  getEJS, 
  pushNew,
};