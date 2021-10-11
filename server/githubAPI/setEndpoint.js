function setEndpoint(path, search) {
  let queryString = '?';

  for (let key in search) {
    queryString += `${key}=${search[key]}&`
  }

  queryString = queryString.slice(0, -1);

  return path + queryString;
}

module.exports = setEndpoint;