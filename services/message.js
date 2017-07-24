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
    message_body: "Guten Tag"
  }
];

function findMessage(id) {
  let err = null;
  let index = null;
  if (typeof id === 'undefined') {
    err = new Error('Id is undefined');
  }

  const message = messages.find((el, ind) => {

    return el.id === id ? index = ind: false;
  });
  return {message, index, err};
}


module.exports = {

  findAll: (callback) => {
    callback(null, messages);
  },

  addMessage: (message) => {
    if (typeof message.id !== 'undefined') {
      messages.push(message);
    } else {
      const error = new Error('Invalid Id');
    }
  },

  findOneAndDelete: (id) => {
    let messageId = findMessage(id);
      console.log(messageId);

      if (messageId.index !== null) {
      messages.splice(messageId.index, 1);
    } else {
      err = new Error('There is no user with such Id');
    }
  },

  findOneAndUpdate: (id, message) => {
    const index = findMessage(id);
    console.log(index);
    messages[index.index] = Object.assign(messages[index.index], message);
  }


};
