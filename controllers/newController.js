const { 
  messages, 
  formatDate,
} = require('../db');

function getEJS(req, res) {
  res.render('templates/form');
}

function pushNew(req, res) {
  const d = new Date()
  messages.push(
    { 
      text: req.body.userMessage, 
      user:  req.body.userName, 
      added: d, 
      formattedDate: formatDate(d) 
    }
  );
  res.redirect('/');
}

module.exports = { 
  getEJS, 
  pushNew,
};