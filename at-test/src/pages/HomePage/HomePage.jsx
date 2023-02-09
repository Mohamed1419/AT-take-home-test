import {React, useEffect, useState} from 'react'
import './HomePage.css'

function HomePage() {
    let [samples, setSamples] = useState()
    let [pageCount, setPageCount] = useState()
    let [resultsCount, setResultsCount] = useState()
    let [offsetCount, setOffsetCount] = useState(0)

    useEffect(() => {
    getSamples();
  }, []);

  //sample data for landing page
      const getSamples = async () => {
      try {
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&offset=${offsetCount}`);
        const resultsData = await res.json();
        // console.log(resultsData);
        setSamples(resultsData)
        setResultsCount(resultsData.meta.total_count)
        setPageCount(Math.ceil(resultsCount/10))
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
          <tr key={sample.id}>
            <td><img alt={sample.title} src={sample.img_sml} /></td>
            <td>{sample.title}</td>
            <td>{sample.dest}</td>
          </tr>
          </tbody>
        )) : <h2>Loading...</h2>}

      </table>
    {
      samples && samples.meta.total_count >10 ?  <button>Load More</button> : null
    }
      
      
    </div>
  )
}

export default HomePage