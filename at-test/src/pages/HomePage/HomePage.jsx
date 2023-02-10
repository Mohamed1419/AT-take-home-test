import {React, useEffect, useState} from 'react'
import './HomePage.css'

function HomePage() {
    let [samples, setSamples] = useState()
    let [samplesData, setSamplesData] = useState([])
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
        setSamplesData(resultsData.data)
        setResultsCount(resultsData.meta.total_count)
        setPageCount(Math.ceil(resultsCount/10))
        // console.log(samples);
      } catch (error) {
        console.log(error);
      }
    };

    const loadMore = async () => {
      try {
         setOffsetCount(offsetCount = offsetCount+10)
        console.log(offsetCount);
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&offset=${offsetCount}`)
        const resultsData = await res.json();
        setSamplesData(samplesData.concat(resultsData.data))
      } catch (error) {
        console.log(error);
      }
    }


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
        <tbody>
        {samples ? samplesData.map((sample)=>(
          <tr key={sample.id}>
            <td><img alt={sample.title} src={sample.img_sml} /></td>
            <td>{sample.title}</td>
            <td>{sample.dest}</td>
          </tr>
        )) : <tr><td>Loading...</td></tr>}
        </tbody>

      </table>
    {
      samples && samples.meta.total_count >10 ?  <button onClick={loadMore}>Load More</button> : null
    }
      
      
    </div>
  )
}

export default HomePage