const messages = require('./message');
const messageHistory = messages.messages;


function findReceivers(id){

  if (typeof id === 'undefined'){
    return null;
  }

  return  messages.filter( message => {
    return message.sender_id === id;
  });
}

module.exports = {
    findReceivers,

    findAll: (callback) => {
      console.log(messageHistory);
        callback(null, messageHistory);
    },
};
