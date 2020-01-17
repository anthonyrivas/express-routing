const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the jungle.');
});

router.post('/', (req, res) => {
  const {username, password} = req.body;
  if (username === 'jsmith' && password === 'I wanna rock!') {
    res.send(`Welcome John, I wanna rock too!`);
  } else {
    res.send(`Sorry, I don't know that user`);
  }
});

module.exports = router;