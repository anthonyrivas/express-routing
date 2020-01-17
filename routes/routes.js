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
module.exports = function(app) {

  app.get('/', (req, res) => {
    res.send('Welcome to the jungle.');
  });
  
  app.post('/', (req, res) => {
    const {username, password} = req.body;
    if (username === 'jsmith' && password === 'I wanna rock!') {
      res.send(`Welcome John, I wanna rock too!`);
    } else {
      res.send(`Sorry, I don't know that user`);
    }
  });
  
  app.get('/posts', (req, res) => {
    res.json(data);
  });
  
  app.get('/posts/:postId', (req, res) => {
    const {postId} = req.params;
    const postSearch = data.filter((v) => v.id === parseInt(postId));
    const post = postSearch.length > 0 ? postSearch[0] : {error: 'Not found'};
    res.send(post);
  });

}