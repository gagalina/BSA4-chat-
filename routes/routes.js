const user = require('./user');
const message = require('./message');
const history = require('./history');


module.exports = function(app){
  app.use('/users', user);
  app.use('/messages', message);
  app.use('/history', history);
};
