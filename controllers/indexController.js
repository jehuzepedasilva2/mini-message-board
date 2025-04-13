const messages = [
  {
    text: "Hi there!", 
    user: "Amando", 
    added: new Date(),
  }, 
  {
    text: "Hello World!", 
    user: "Charles", 
    added: new Date(),
  }
];

const getOrdinal = (n) => {
  if (n > 3 && n < 21) return 'th';
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

messages.forEach(m => {
  const d = m.added;
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const ordinal = `${date}${getOrdinal(date)}`;

  m.formattedDate = `${day}, ${month} ${ordinal}`;  // 'Sun, Apr 13th'
});

function getEJS(req, res) {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
}

module.exports = getEJS;