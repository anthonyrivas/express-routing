const express = require('express');
const routes = require('./routes/routes');
const posts = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes go here

app.use('/', routes);
app.use('/posts', posts);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
})