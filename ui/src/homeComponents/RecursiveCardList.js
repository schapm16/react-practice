import React from 'react';
import './RecursiveCardList.css';

import { Card } from './';

function SingleCardList({ data }) {
  return (
    <ul className="card-list">
      {data.map((eachContext) => {
        return (
          <li key={eachContext.id}>
            <Card context={eachContext}/>
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