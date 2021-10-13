const path = require('path');
const express = require('express');
const app = express();
const PORT = 3001;

const { apiRouter } = require('./server/routes/');

app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  const uiRoot = path.join(__dirname, 'ui', 'build');
  app.use(express.static(uiRoot));
  app.get('/*', (request, response) => {
    response.sendFile('index.html', {root: uiRoot});
  })
}


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
