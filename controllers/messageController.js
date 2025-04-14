const { getMessage } = require('../db');

function getESJ(req, res) {
  const { id } = req.params;
  const msg = getMessage(id);
  res.render('templates/message', { reqMessage: msg });
}

module.exports = getESJ;