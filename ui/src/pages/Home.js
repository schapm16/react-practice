import React, { useEffect, useState } from 'react';
import './Home.css';
import { RecursiveCardList } from '../homeComponents';

export default function Home() {
  const [ organizations, setOrganizations ] = useState([]);
    
  return (
    <section className="home">
      <RecursiveCardList data={[...organizations]}/>
    </section>
  )
}