const express = require('express');
const app = express();
const PORT = 3001;

const { apiRouter } = require('./server/routes/');

app.use('/api', apiRouter);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
