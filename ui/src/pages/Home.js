import React, { useEffect, useState } from 'react';
import './Home.css';
import { RecursiveCardList } from '../homeComponents';
import { getOrganizations } from '../requestData';

export default function Home() {
  const [ organizations, setOrganizations ] = useState([]);
  
  useEffect(() => {
    getOrganizations()
      .then(data => {
        setOrganizations(data);
      })
  }, [])
    
  return (
    <section className="home">
      <RecursiveCardList data={[...organizations]}/>
    </section>
  )
}