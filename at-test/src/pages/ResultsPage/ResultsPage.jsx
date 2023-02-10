import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './ResultsPage.css'

function ResultsPage() {
    let params = useParams();
    let [results, setResults] = useState() //contains both data and metadata, used in order to differentiate between when there is a no results response from the fetch, and when there is actual data to be used
    let [resultsData, setResultsData] = useState([]) //this is an array which contains all the loaded up results. When a new fetch to load more is called, the new data is added onto the end of this array
    let [offsetCount, setOffsetCount] = useState(0) //when user clicks load more, this increments by 10 and then is used in the new fetch for the new batch of results, which is then added to the end of the array of all results kept in the resultsData state


    useEffect(() => {
      setResults();
      getResults();
    }, [params.query]);
    //whenever there is a change in the params ie a new search has been made, the useEffect block is called again to fetch based on the new query
    
    //calling api for search query, which is taken from the params
    const getResults = async () => {
      try {
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&title=${params.query}&offset=0`);
        const resultsData = await res.json();
        setResults(resultsData)
        setResultsData(resultsData.data)
        setOffsetCount(0) //resets offset counter so when a user searches and then re-searches they are not taken to other than page 1 of the results
      } catch (error) {
        console.log(error);
      }
    };


//function for when load more button is clicked, this will get the next 10 results by fetching from the api once again
      const loadMore = async () => {
      try {
        setOffsetCount(offsetCount = offsetCount+10) //when load more is invoked the next 10 results need to be fetched hence the increment of 10
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&title=${params.query}&offset=${offsetCount}`)
        const resultsData1 = await res.json();
        setResultsData(resultsData.concat(resultsData1.data)) //new results added to the end of the array containing all the results data
      } catch (error) {
        console.log(error);
      }
    }
  return (
        <>

         <table>
          <thead>

          <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Destination</th>
        </tr>
          </thead>
          <tbody>
            {/* second condition here is needed in order to ensure the response is in the format needed */}
      {results && Object.keys(results).length > 1 ? resultsData.map((data)=>(
       
        <tr key={data.id}>
            <td><img alt={data.title} src={data.img_sml} /></td>
            <td>{data.title}</td>
            <td>{data.dest}</td>
          </tr>
        )) : results && Object.keys(results).length === 1 ? <tr><td>{results.err_desc}</td></tr> : <tr><td>Loading...</td></tr>}
        </tbody>
        </table>
      {
        // third condition ensures load more button only shows when it is needed as there are more than 10 results
        // fourth condition is needed so when on the last batch of results for any given query, load more button does not show again
      results && Object.keys(results).length > 1  && results.meta.total_count >10 && resultsData.length < results.meta.total_count ?  <button className='load-more-btn' onClick={loadMore}>Load More</button> : null
    }
        </>
  )
}

export default ResultsPage