const { 
  messages, 
  formatDate 
} = require('../db');

messages.forEach(m => {
  const d = m.added;
  m.formattedDate = formatDate(d); 
});

function getEJS(req, res) {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
}

module.exports = getEJS;