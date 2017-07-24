const router = require('express').Router();
const userService = require('../services/user');

//Create
router.post('/', function (req, res) {
  const newUser = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };

  userService.addUser(newUser);
  res.json(res.data);
});

//Read
router.get('/', (req, res, next) => {
  userService.findAll((err, data) => {
    if (!err){
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

//Update
router.put('/', (req, res) => {

  const updatedUser = req.body;
  userService.findOneAndUpdate(Number(req.body.id), updatedUser);
  res.json(res.data);
});

//Delete
router.delete('/', (req, res) => {
  userService.findOneAndDelete(Number(req.body.id));
  res.json(res.data);
});



module.exports = router;