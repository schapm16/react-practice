const axios = require('axios');
const setEndpoint = require ('./setEndpoint');

axios.defaults.baseURL = 'https://api.github.com/'
axios.defaults.headers = {
  'accept': 'application/vnd.github.v3+json',
}

function getOrganizations(config = {}) {
  let { 
    search = {
      since: 1000,
      per_page: 10,
    },
    path = '/organizations',
  }  = config;

  const endpoint = setEndpoint(path, search);

  return axios.get(endpoint)
    .then(response => response.data)
}

module.exports = {
  getOrganizations,
}