import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './ResultsPage.css'

function ResultsPage() {
    let params = useParams();
    let [results, setResults] = useState()
    console.log(params.query);

    useEffect(() => {
      setResults();
      const getResults = async () => {
      try {
        const res = await fetch(`https://global.atdtravel.com/api/products?geo=en&title=${params.query}`);
        const resultsData = await res.json();
        console.log(resultsData);
        setResults(resultsData)
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };

    getResults();
  }, [params.query]);
  //whenever there is a change in the params ie a new search has been made, the useEffect block is called again to fetch based on the new query

  return (
        <>

         <table>
          <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Destination</th>
        </tr>
      {results && Object.keys(results).length > 1 ? results.data.map((data)=>(
       
        <tr>
            <td><img alt={data.title} src={data.img_sml} /></td>
            <td>{data.title}</td>
            <td>{data.dest}</td>
          </tr>
        )) : results && Object.keys(results).length === 1 ? <h2>{results.err_desc}</h2> : <h2>Loading...</h2>}
        </table>
        </>
  )
}

export default ResultsPage