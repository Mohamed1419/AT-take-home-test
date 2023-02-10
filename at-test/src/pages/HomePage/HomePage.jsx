import {React, useEffect, useState} from 'react'
import './HomePage.css'

function HomePage() {
    let [samples, setSamples] = useState() //contains both data and metadata, used in order to differentiate between when there is a no results response from the fetch, and when there is actual data to be used
    let [samplesData, setSamplesData] = useState([]) //this is an array which contains all the loaded up results. When a new fetch to load more is called, the new data is added onto the end of this array
    let [offsetCount, setOffsetCount] = useState(0) //when user clicks load more, this increments by 10 and then is used in the new fetch for the new batch of results, which is then added to the end of the array of all results kept in the resultsData state

    useEffect(() => {
    getSamples();
  }, []);

  //sample data for landing page
      const getSamples = async () => {
      try {
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&offset=${offsetCount}`);
        const resultsData = await res.json();
        setSamples(resultsData)
        setSamplesData(resultsData.data)
      } catch (error) {
        console.log(error);
      }
    };

//function for when load more button is clicked, this will get the next 10 results by fetching from the api once again
    const loadMore = async () => {
      try {
         setOffsetCount(offsetCount = offsetCount+10) //when load more is invoked the next 10 results need to be fetched hence the increment of 10
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&offset=${offsetCount}`)
        const resultsData = await res.json();
        setSamplesData(samplesData.concat(resultsData.data)) //new results added to the end of the array containing all the results data
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
        // second condition ensures load more button only shows when it is needed as there are more than 10 results
        // third condition is needed so when on the last batch of results for any given query, load more button does not show again
      samples && samples.meta.total_count >10 && samplesData.length < samples.meta.total_count ?  <button onClick={loadMore}>Load More</button> : null
    }
      
      
    </div>
  )
}

export default HomePage