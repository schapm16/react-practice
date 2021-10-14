import React, { useEffect, useState } from 'react';
import './OrganizationDetail.css';
import { getOrganizationDetail } from '../requestData';

export default function OrganizationDetail({ location }) {

  let [ organizationDetail, setOrganizationDetail ] = useState(null);

  useEffect(() => {
    getOrganizationDetail(location.search.replace('?org=', ''))
      .then(data => setOrganizationDetail(data));
  }, [])

  if (!organizationDetail) return <div></div>;

  return (
    <>
    <header className="organization-detail-header">
      <img className="organization-detail-header-image" src={organizationDetail.avatar_url}/>
      <h1 className="organization-detail-heading">{`Explore ${organizationDetail.login}`}</h1>
    </header>
    <div className='organization-detail grid-container'>
      <section id="members" className="grid-item">
        <h2>Members</h2>
        {organizationDetail.members_data && organizationDetail.members_data.map(member => {
          return (
            <div className="member-container" key={member.id}>
              <img className="member-avatar" alt={`${member.login} avatar`} src={member.avatar_url}/>
              <p className="member-name">{member.login}</p>
              <a 
                className="createOverlay member-link"
                href={member.html_url}
                aria-label={`Link to ${member.login} profile on GitHub`}
              >
              </a>
            </div>
          )
        })}
      </section>
      <section id="repos" className="grid-item">
        <h2>Repositories</h2>
        {organizationDetail.repos_data && organizationDetail.repos_data.map(repo => {
          return (
          <div className="repo-container" key={repo.id}>
            <p className="repo-name">{repo.name}</p>
            <a
              className="createOverlay repo-link"
              href={repo.html_url}
              aria-label={`Link to ${repo.name} repository on GitHub`}
            ></a>
          </div>
          )
        })}
      </section>
    </div>
    </>
  )
}