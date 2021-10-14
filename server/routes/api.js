const express = require('express');
const router = express.Router();

const { getOrganizations, getOrganizationDetail } = require('../githubAPI');

router.get('/get-organizations', (request, response) => {
  const query = {};
  const { lastId } = request.query;

  if (lastId && parseInt(lastId, 10)) {
    query.lastId = lastId;
  }

  getOrganizations(query)
    .then(data => response.json(data))
})

router.get('/get-organization-detail', (request, response) => {
  const { org } = request.query;

  getOrganizationDetail(org)
    .then(data => response.json(data));
})

module.exports = router;