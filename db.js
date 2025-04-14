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

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatDate = (d) => {
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const ordinal = `${date}${getOrdinal(date)}`;
  return `${day}, ${month} ${ordinal}`; 
}

module.exports = {
  messages, 
  formatDate,
};