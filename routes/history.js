const router = require('express').Router();
const historyService = require('../services/history');

//Read all history
router.get('/', (req, res) => {
  historyService.findAll((err, data) => {
    if (!err){
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});


//Read message history of particular user
router.get('/:id', (req, res) => {
  res.json(historyService.findReceivers(Number(req.params.id)));
});

module.exports = router;