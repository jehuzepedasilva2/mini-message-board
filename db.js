const messages = [
  {
    id: '1',
    text: "Hi there!", 
    user: "Amando", 
    added: new Date(Date.now() - 24 * 60 * 60 * 1000),
  }, 
  {
    id: '2',
    text: "Hello World!", 
    user: "Charles", 
    added: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "3", 
    text: "well hello!",
    user: "Terry",
    added: new Date(Date.now() - 24 * 60 * 60 * 1000),
  }, 
  {
    id: "4", 
    text: "this site is pretty cool",
    user: "Terry",
    added: new Date(Date.now() - 24 * 60 * 60 * 1000),
  }, 
  {
    id: "5", 
    text: "will it work, lets try!",
    user: "Milan",
    added: new Date(Date.now() - 24 * 60 * 60 * 1000),
  }, 
  {
    id: "6", 
    text: "very good design!",
    user: "Snex",
    added: new Date(Date.now() - 24 * 60 * 60 * 1000),
  }, 
  {
    id: "6", 
    text: "Nice app!",
    user: "Terry",
    added: new Date(),
  }, 
  {
    id: "7", 
    text: "Does this work, test...", 
    user: "Jay", 
    added: new Date(),
  }, 
  {
    id: "8", 
    text: "amazing", 
    user: "Sam", 
    added: new Date(), 
  }, 
  {
    id: "9", 
    text: "How are you persisting the data, is it using a database ?", 
    user: "", 
    added: new Date(),
  }, 
  {
    id: "10", 
    text: "This should break the UI flow, or else you did a great job. jagijgiheighiehgiehgiehgiehgiheigheighaigiehgiaehigaiignaignjnbanbagjaihgihaehgieighaihihjaiwhiaeighaiegaheighaighihgiehihgngvainbibhinghiehgiaegiheagihiehgiaehgigainbihnbeghiejgieghiahgiewnhgiawhgiginhiuahnbaiohgiahiojdiahihiragjigiiehaighigh.", 
    user: "Code  Breaker", 
    added: new Date(),
  }, 
  {
    id: "11", 
    text: "Testing testing....", 
    user: "Toshi", 
    added: new Date(),
  }
];

const colors = ['#ffc', '#ffe4e1', '#c1f0f6', '#d0f0c0', '#f9f9a3'];
const rotations = ['-5deg', '-3deg', '1deg', '3deg', '5deg'];

const assignRotationAndColor = (msg) => {
  msg.color = colors[Math.floor(Math.random() * colors.length)];
  msg.rotation = rotations[Math.floor(Math.random() * rotations.length)];
}

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

const getMessage = (id) => {
  const msg = messages.find(currMsg => currMsg.id === id);
  return msg;
}

module.exports = {
  messages, 
  formatDate,
  assignRotationAndColor,
  getMessage,
};