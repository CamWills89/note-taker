
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static("public"));

const db = require("./db/db.json");

app.get('/api/notes', (request, response) => {
    response.send(db);
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
