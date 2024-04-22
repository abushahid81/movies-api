import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import Cards from './Cards';


function Post() {

    const [movies, setMovies] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([])

    const imageurl= "https://image.tmdb.org/t/p/w500/";

    const apiKey = "04261e1a9f01e88de05171293dec7ae8";

    useEffect  (()=>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
        .then(response => {
           setMovies(response.data.results);
        //    console.log(response.data.results);
        })
       },[]);  
       // [] - component did mount -(life Cycle)
       useEffect(()=>{
        const filtered = movies.filter(abu =>
            abu.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
       },[searchQuery, movies]);

  return (
    <>
   <Container>
      <Row>
        <input type="text" className='search' placeholder='Search the title'
        value={searchQuery}
        onChange={event => setsearchQuery(event.target.value)}/>



       {filteredData.map((abu, index)=> (
        // <h1>{console.log(abu)}</h1>
        <Cards 
        index={index}
        poster_path={imageurl+abu.poster_path}
        release_date={abu.release_date}        
        title={abu.title}
        />

       ))}
       
        </Row>
    </Container>
    </>
  );
}

export default Post
