function getOrganizations(organizations = []) {
  const latestOrganizationId = organizations.slice(-1)[0]?.id;

  let query = (latestOrganizationId) ? `?lastId=${latestOrganizationId}` : '';

  return fetch(`/api/get-organizations${query}`)
    .then(response => response.json())
}

function getOrganizationDetail(org = '') {
  if (!org) return Promise.resolve({});
  return fetch(`/api/get-organization-detail?org=${org}`)
    .then(response => response.json());
}

export {
  getOrganizations,
  getOrganizationDetail
}