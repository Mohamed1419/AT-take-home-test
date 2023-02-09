import {React, useEffect, useState} from 'react'
import './HomePage.css'

function HomePage() {
    let [samples, setSamples] = useState()

    useEffect(() => {
      const getSamples = async () => {
      try {
        const res = await fetch('https://global.atdtravel.com/api/products?geo=en');
        const resultsData = await res.json();
        console.log(resultsData);
        setSamples(resultsData)
        console.log(samples);
      } catch (error) {
        console.log(error);
      }
    };

    getSamples();
  }, []);


  return (
    <>
      {samples ? samples.data.map((sample)=>(<h2 key={sample.id}>{sample.title}</h2>)) : <h2>Loading...</h2>}
    </>
  )
}

export default HomePage