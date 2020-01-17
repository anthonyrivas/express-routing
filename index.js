const express = require('express');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes go here

routes(app);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
})