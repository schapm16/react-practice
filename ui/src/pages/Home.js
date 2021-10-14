import React, { useEffect, useState } from 'react';
import './Home.css';
import { RecursiveCardList } from '../homeComponents';
import { getOrganizations } from '../requestData';

export default function Home() {
  const [ organizations, setOrganizations ] = useState([]);

  function showMoreHandler() {
    getOrganizations(organizations)
      .then(data => {
        setOrganizations([...organizations, ...data]);
      })
  }
  
  useEffect(() => {
    getOrganizations()
      .then(data => {
        setOrganizations(data);
      })
  }, [])
    
  return (
    <>
    <header>
      <h1 className="home-heading">Discover GitHub Organizations</h1>
    </header>
    <section className="home">
      <RecursiveCardList data={[...organizations]}/>
      <button 
        id="showMoreButton"
        tabIndex="0"
        aria-label="Show more organizations"
        onClick={showMoreHandler}>Show More
      </button>
    </section>
    </>
  )
}