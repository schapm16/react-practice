import React, { useEffect, useState } from 'react';
import './Home.css';

import { CardList } from '../homeComponents';

export default function Home() {
  const [ organizations, setOrganizations ] = useState([]);
    
  return (
    <section className="home">
      <CardList data={[...organizations]}/>
    </section>
  )
}