import './App.css'
import Gif from './components/Gif'
import Search from './components/Search'
import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [gifUrl, setgifUrl] = useState('')
  const giphyApiKey = "MPLmzAkwOknUcE8H2LifRt6juvyb0C3F"

  //call the random gif
  const randomGif = async () => {
    const gifRandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}`
    const gifRandom = await axios.get(gifRandomUrl)
    setgifUrl(gifRandom.data.data.images.original.url)
}

//first call to set state
useEffect(() => {
  randomGif()
}, [])

//call searched Gif
const searchNewGif = async (searchText) => {
  const gifSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchText.current.value}`;
  const gifSearch = await axios.get(gifSearchUrl);
  setgifUrl(gifSearch.data.data[0].images.original.url);
}

  return (
    <div className="App">
      <h1>The Gif Generator</h1>
      <Search onSubmit={searchNewGif}/>
      <Gif gif={gifUrl}/>
    </div>
  );
}

export default App;
