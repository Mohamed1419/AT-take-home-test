import {React, useEffect, useState} from 'react'
import './HomePage.css'

function HomePage() {
    let [samples, setSamples] = useState()
    let [offsetCount, setOffsetCount] = useState(0)

    useEffect(() => {
    getSamples();
  }, []);

      const getSamples = async () => {
      try {
        const res = await fetch('https://global.atdtravel.com/api/products?geo=en');
        const resultsData = await res.json();
        // console.log(resultsData);
        setSamples(resultsData)
        // console.log(samples);
      } catch (error) {
        console.log(error);
      }
    };

  return (

    <div>
      <table>
        <thead>

        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Destination</th>
        </tr>
        </thead>
        {samples ? samples.data.map((sample)=>(
          <tbody>
          <tr>
            <td><img alt={sample.title} src={sample.img_sml} /></td>
            <td>{sample.title}</td>
            <td>{sample.dest}</td>
          </tr>
          </tbody>
        )) : <h2>Loading...</h2>}

      </table>
      
    </div>
    
  )
}

export default HomePage