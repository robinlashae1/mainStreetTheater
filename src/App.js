import {useEffect, useState, React} from 'react';
import Favorites from './Favorites';
import FilterContainer from './FilterContainer';
import Footer from './Footer';
import Header from './Header';
import MovieSpace from './MovieSpace';
import MovieContainer from './MovieContainer';
import './App.css';

function App() {
const [movieList,setMovieList]= useState([]);

  useEffect(()=>{
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8779b1ab")
    .then((r) => r.json())
    .then((movies) => setMovieList(movies))
}, []);
console.log(movieList)

  return (
    <div className="App">
      <Header/>
      <FilterContainer/>
      <Favorites/>
      <MovieSpace/>
        <MovieContainer/>
      <MovieSpace/>
      <Footer/>
    </div>
  );
}

export default App;
