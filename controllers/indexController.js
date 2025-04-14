const { 
  messages, 
  formatDate, 
  assignRotationAndColor,
} = require('../db');

messages.forEach(m => {
  const d = m.added;
  m.formattedDate = formatDate(d); 
  assignRotationAndColor(m);
});

function getEJS(req, res) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

module.exports = getEJS;