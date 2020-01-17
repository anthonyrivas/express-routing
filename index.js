const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware goes here

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes go here



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
})