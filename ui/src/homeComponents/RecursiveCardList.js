import React from 'react';
import './RecursiveCardList.css';

function SingleCardList({ data }) {
  return (
    <ul className="card-list">
      {data.map(({avatar_url, description, id, login, url_data: { followers, public_repos, public_gists }}) => {
        return (
          <li className="card" key={id}>
            <div className="card-header">
              <img src={avatar_url} alt="Organization Avatar" className="card-avatar" />
              <h2 className="card-title">{login}</h2>
            </div>
            <div className="card-body">
              <div className="stat-container">
                <p className="stat">Followers: <span className="stat--bold">{followers}</span></p>
                <p className="stat">Public Repos: <span className="stat--bold">{public_repos}</span></p>
                <p className="stat">Public Gists: <span className="stat--bold">{public_gists}</span></p>
              </div>
              <div className="description">
                <p>{description}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
 
export default function CardList({ data }) {
  data = [...data];
  const dataForThisIteration = data.splice(0, 10);

  return (
    <>
      <SingleCardList data={dataForThisIteration}/>
      {(data.length) ? <CardList data={data}/> : null}
    </>
  )
}