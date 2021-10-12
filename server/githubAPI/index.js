const axios = require('axios');
const setEndpoint = require ('./setEndpoint');

axios.defaults.baseURL = 'https://api.github.com/'
axios.defaults.headers = {
  'accept': 'application/vnd.github.v3+json',
}


/**
 * Submits GET to GitHub /organizations
 *
 * @param {*} [query={}]
 * @return {Promise<Array>} 
 */
function getOrganizationsList(query = {}) {
  const search = {
    per_page: 10,
    since: parseInt(query.lastId, 10) + 1 || 1000,
  }

  const endpoint = setEndpoint('/organizations', search);

  return axios.get(endpoint)
    .then(response => response.data)
}


/**
 * Submits GET to GitHub /orgs/{org}
 *
 * @param {string} organizationUrl
 * @return {Promise<Object>}
 */
function getOrganizationOrg(organizationUrl) {
  if (!organizationUrl) return Promise.resolve({});

  return axios.get(organizationUrl)
    .then(response => response.data)
}


/**
 * Combines GET /organizations and GET /orgs/{org} before returning
 * to client Request
 *
 * @param {*} [query={}]
 * @return {Promise<Array>} 
 */
async function getOrganizations(query = {}) {
  const organizationList = await getOrganizationsList(query);
  const urlDataPromiseArray = organizationList.map(async (organization) => {
    let urlDataPromise = getOrganizationOrg(organization.url);
    organization.url_data = await urlDataPromise;
    return urlDataPromise; 
  })

  return Promise.all(urlDataPromiseArray)
    .then(() => organizationList);
}

module.exports = {
  getOrganizations,
}