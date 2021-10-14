const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const { apiRouter } = require('./server/routes/');

app.use('/api', apiRouter);

// Serves production build when hosted
if (process.env.NODE_ENV === 'production') {
  const uiRoot = path.join(__dirname, 'ui', 'build');
  app.use(express.static(uiRoot));
  app.get('/*', (request, response) => {
    response.sendFile('index.html', {root: uiRoot});
  })
}

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})
