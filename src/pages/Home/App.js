import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

import { MovieContext } from '../../context/MovieContext'
import CardList from '../../components/CardList'
import Searchbox from '../../components/Searchbox'

const baseUrl = "https://api.themoviedb.org/3/search/movie"
const apiKey = "8027a6a53073204b50661589f3f65c0f"
const baseImageUrl = "https://image.tmdb.org/t/p/w500"

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

function App() {
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState(randomCharacter)
  
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

  // useContext
  return (
    <div className="App">
      <MovieContext.Provider value={{ movies, baseImageUrl, setSearchText}}>
        <Searchbox/>
        <CardList/>
      </MovieContext.Provider>
    </div>
  );

  // return (
  //   <div className="App">
  //     <Searchbox setSearchText={setSearchText}/>
  //     <CardList movies={movies} baseImageUrl={baseImageUrl} />
  //   </div>
  // );
}

export default App;
