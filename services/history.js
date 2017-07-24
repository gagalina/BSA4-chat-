const messages = [
  {
    id: 1,
    sender_id: 1,
    receiver_id: 2,
    message_body: "Hi"
  },
  {
    id: 2,
    sender_id: 2,
    receiver_id: 3,
    message_body: "Bye"
  },
  {
    id: 3,
    sender_id: 1,
    receiver_id: 3,
    message_body: "Gutten Tag"
  }
];

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
        callback(null, messages);
    },
};
