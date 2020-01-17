const express = require('express');
const router = express.Router();

data = [{
  id: 1,
  post: "Hello"
},
{
  id: 2,
  post: "There"
},
{
  id: 3,
  post: "The angel"
},
{
  id: 4,
  post: "from my nightmare"
}];

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:postId', (req, res) => {
  const {postId} = req.params;
  const postSearch = data.filter((v) => v.id === parseInt(postId));
  const post = postSearch.length > 0 ? postSearch[0] : {error: 'Not found'};
  res.send(post);
});


module.exports = router;