import React from 'react';
import './Card.css';

export default function Card({ context }) {
  const { 
    avatar_url,
    description,
    id, 
    login, 
    url_data: {
      followers,
      public_repos,
      public_gists 
    }
  } = context;

  return (
    <div className="card">
      <div className="card-header">
        <img src={avatar_url} alt="Organization Avatar" className="card-avatar" />
        <h2 className="card-title">{login}</h2>
      </div>
      <div className="card-body">
        <table className="stat-table">
          <tbody className="stat-table-body">
            <tr className="stat-row">
              <th className="stat">Followers:</th>
              <td className="stat stat--bold">{followers}</td>
            </tr>
            <tr className="stat-row">
              <th className="stat">Public Repos:</th>
              <td className="stat stat--bold">{public_repos}</td>
            </tr>
            <tr className="stat-row">
              <th className="stat">Public Gists:</th>
              <td className="stat stat--bold">{public_gists}</td>
            </tr>
          </tbody>
        </table>
        <div className="description">
          {(description) ? <p>{description}</p> : null}
        </div>
      </div>
    </div>
  )
}