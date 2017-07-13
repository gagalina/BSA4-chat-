const router = require('express').Router();
const messageService = require('../services/message');

//Create
router.post('/add', function (req, res) {
  const newMessage = {
    id: req.body.id,
    sender_id: req.body.sender_id,
    receiver_id: req.body.receiver_id,
    message_body: req.body.message_body
  };

  messageService.addMessage(newMessage);
  res.json(res.data);
});

//Read
router.get('/', (req, res) => {
  messageService.findAll((err, data) => {
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
router.put('/update/:id', (req, res) => {
  const updatedMessage = req.body;
  messageService.findOneAndUpdate(Number(req.body.id), updatedMessage);
  res.json(res.data);
});

//Delete
router.delete('/delete/:id', (req, res) => {
  messageService.findOneAndDelete(Number(req.body.id));
  res.json(res.data);
});


module.exports = router;