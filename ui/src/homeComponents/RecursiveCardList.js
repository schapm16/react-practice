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