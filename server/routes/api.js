const express = require('express');
const router = express.Router();

const { getOrganizations } = require('../githubAPI');

router.get('/get-organizations', (request, response) => {
  getOrganizations()
    .then(data => response.json(data))
})

module.exports = router;