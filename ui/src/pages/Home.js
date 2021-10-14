import React, { useEffect, useState } from 'react';
import './Home.css';
import { RecursiveCardList } from '../homeComponents';
import { getOrganizations } from '../requestData';
import { dataCache } from '../App';

export default function Home() {
  const [ organizations, setOrganizations ] = useState([]);

  function showMoreHandler() {
    getOrganizations(organizations)
      .then(data => {
        setOrganizations([...organizations, ...data]);
        dataCache.organizations = [...organizations, ...data];
      })
  }
  
  useEffect(() => {
    if (dataCache.organizations) {
      setOrganizations(dataCache.organizations);
      return;
    }
    getOrganizations()
      .then(data => {
        setOrganizations(data);
        dataCache.organizations = data;
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