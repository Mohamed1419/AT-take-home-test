import {React, useEffect, useState} from 'react'
import './HomePage.css'

function HomePage() {
    let [samples, setSamples] = useState([])

    useEffect(() => {
         const getSamples = async () => {
      try {
        const res = await fetch('https://global.atdtravel.com/api/products?geo=en');
        const resultsData = await res.json();
        setSamples(resultsData)
        console.log(resultsData);
      } catch (error) {
        console.log(error);
      }
    };

    getSamples();
  }, []);


  return (
    <div>
      <ul>
      {
        samples ? (samples.data.map((post) => (<li key={post.id}>{post.title}</li>))) : <h1>loading</h1>
      }
      </ul>
    </div>
  )
}

export default HomePage