import React, { useEffect, useState } from 'react';
import './OrganizationDetail.css';
import { getOrganizationDetail } from '../requestData';

export default function OrganizationDetail({ location }) {

  let [ organizationDetail, setOrganizationDetail ] = useState(null);

  useEffect(() => {
    getOrganizationDetail('railslove')
      .then(data => setOrganizationDetail(data));
  }, [])

  if (!organizationDetail) return <div></div>;

  return (
    <div className='organization-detail grid-container'>
      <section id="members" className="grid-item">
        <h2>Members</h2>
        {organizationDetail.members_data && organizationDetail.members_data.map(member => {
          return (
            <div className="member-container">
              <img className="member-avatar" alt={`${member.login} avatar`} src={member.avatar_url}/>
              <p className="member-name">{member.login}</p>
              <a 
                className="createOverlay member-link"
                href={member.html_url}
                aria-label={`Link to ${member.login} profile on GitHub`}>
              </a>
            </div>
          )
        })}
      </section>
      <section id="repos" className="grid-item"></section>
      <section id="gists" className="grid-item"></section>
    </div>
  )
}