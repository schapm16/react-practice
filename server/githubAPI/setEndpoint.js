
/**
 * Concatenates a URL path and any number
 * of query string params
 * 
 * @param {string} path (example /endpoint)
 * @param {Object} search (example {search: 1000})
 * @return {string} (example '/endpoint?search=1000')
 */
function setEndpoint(path, search = {}) {
  let queryString = '';

  for (let key in search) {
    queryString += `${key}=${search[key]}&`
  }

  queryString = queryString.slice(0, -1);

  return (queryString) ? `${path}?${queryString}` : path;
}

module.exports = setEndpoint;