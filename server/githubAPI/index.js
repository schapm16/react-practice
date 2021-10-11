const axios = require('axios');
const setEndpoint = require ('./setEndpoint');

axios.defaults.baseURL = 'https://api.github.com/'
axios.defaults.headers = {
  'accept': 'application/vnd.github.v3+json',
}

function getOrganizations(query = {}) {
  const search = {
    per_page: 10,
    since: parseInt(query.lastId, 10) + 1 || 1000,
  }

  const endpoint = setEndpoint('/organizations', search);

  return axios.get(endpoint)
    .then(response => response.data)
}

module.exports = {
  getOrganizations,
}