const users = [
  {
    id: 1,
    first_name: 'John',
    last_name: "Doe",
    email: "johndoe@gmail.com"
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: "Doe",
    email: "johndoe@gmail.com"
  },
  {
    id: 3,
    first_name: 'Jill',
    last_name: "Doe",
    email: "johndoe@gmail.com"
  }
];

function findUser(id){
  let err = null;
  let index = null;
  if (typeof id === 'undefined'){
    err = new Error('Id is undefined');
  }

  const user = users.find((el, ind) => {
    if (el.id === id){
      index = ind;
      return true;
    } else {
      return false;
    }
  });
  return {user, index, err};
}


module.exports = {

  findAll: (callback) => {
    callback(null, users);
  },

  addUser:(user) => {
    if (typeof user.id !== 'undefined') {
      users.push(user);
    } else{
      const error = new Error('Invalid Id');
    }
  },

  findOneAndDelete: (id) => {
    let userId = findUser(id);
    if (typeof userId !== 'undefined'){
      users.splice(userId, 1);
    } else {
      err = new Error('There is no user with such Id');
    }
  },

  findOneAndUpdate: (id, user) => {
    const index = findUser(id);
    users[index.index] = Object.assign(users[index.index], user);
  }
};

