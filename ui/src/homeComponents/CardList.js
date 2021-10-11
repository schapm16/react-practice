import React from 'react';
import './CardList.css';

export default function CardList({ data }) {
  return (
    <ul className="card-list">
      {data.map(({avatar_url, description, id, login}) => {
        return (
          <li className="card" key={id}>
            <div className="card-header">
              <img src={avatar_url} alt="Organization Avatar" className="card-avatar" />
              <h2 className="card-title">{login}</h2>
            </div>
            <div className="card-body">
              <p>{description}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}