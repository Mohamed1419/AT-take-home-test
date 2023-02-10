import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './ResultsPage.css'

function ResultsPage() {
    let params = useParams();
    let [results, setResults] = useState()
    let [resultsData, setResultsData] = useState([])
    let [pageCount, setPageCount] = useState()
    let [resultsCount, setResultsCount] = useState()
    let [offsetCount, setOffsetCount] = useState(0)
    // console.log(params.query);


    //calling api for search query
    useEffect(() => {
      setResults();
      const getResults = async () => {
      try {
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&title=${params.query}&offset=${offsetCount}`);
        const resultsData = await res.json();
        setResults(resultsData)
        setResultsData(resultsData.data)
      } catch (error) {
        console.log(error);
      }
    };

    getResults();
  }, [params.query]);
  //whenever there is a change in the params ie a new search has been made, the useEffect block is called again to fetch based on the new query

//function for when load more button is clicked, this will get the next 10 results by fetching from the api once again
      const loadMore = async () => {
      try {
         setOffsetCount(offsetCount = offsetCount+10)
        console.log(offsetCount);
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&title=${params.query}&offset=${offsetCount}`)
        const resultsData1 = await res.json();
        setResultsData(resultsData.concat(resultsData1.data))
      } catch (error) {
        console.log(error);
      }
    }
  return (
        <>

         <table>
          <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Destination</th>
        </tr>
      {results && Object.keys(results).length > 1 ? resultsData.map((data)=>(
       
        <tr key={data.id}>
            <td><img alt={data.title} src={data.img_sml} /></td>
            <td>{data.title}</td>
            <td>{data.dest}</td>
          </tr>
        )) : results && Object.keys(results).length === 1 ? <tr>{results.err_desc}</tr> : <tr>Loading...</tr>}
        </table>
      {
      results && Object.keys(results).length > 1  &&results.meta.total_count >10 ?  <button onClick={loadMore}>Load More</button> : null
    }
        </>
  )
}

export default ResultsPage