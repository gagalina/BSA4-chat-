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

  findOneAndUpdate: (id) => {
    const index = findUser(id);
  }
};
