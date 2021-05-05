import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

import CardList from './components/CardList'
import Searchbox from './components/Searchbox'

const baseUrl = "https://api.themoviedb.org/3/search/movie"
const apiKey = "8027a6a53073204b50661589f3f65c0f"
const baseImageUrl = "https://image.tmdb.org/t/p/w500"

function App() {
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState("a")
  useEffect(() => {
    axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        query: searchText,
        page: 1
      }
    }).then(res => setMovies(res.data.results))
      .catch(err => console.log(err))
  }, [searchText])
  return (
    <div className="App">
      <Searchbox setSearchText={setSearchText}/>
      <CardList movies={movies} baseImageUrl={baseImageUrl} />
    </div>
  );
}

export default App;
