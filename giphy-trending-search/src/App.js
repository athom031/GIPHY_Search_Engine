import logo from './logo.svg';
import { API_KEY, API_ENDPOINT, TRENDING, SEARCH } from '../src/api';
import { useState, useEffect } from 'react';


// https://developers.giphy.com/docs/api/endpoint/

function App() {
  const [trendingData, setTrendingData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${API_ENDPOINT}${TRENDING}?api_key=${API_KEY}&limit=10`)
      .then((response) => response.json())
      .then((data) => setTrendingData(data.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${API_ENDPOINT}${SEARCH}?api_key=${API_KEY}&q=${searchTerm}&limit=10`)
      .then((response) => response.json())
      .then((data) => setSearchData(data.data))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  const renderGifs = gifs => (
    <>
      {gifs.map((gif, index) => (
        <div className='embedded-gif' key={index}>
          <iframe
            src={gif.embed_url}
            key={gif.id}
            width='480'
            height='270'
            frameBorder='0'
            className='giphy-embed'
            allowFullScreen=''
            type='gif'
          ></iframe>
        </div>
      ))}
    </>
  );

  return (
    <div className="giphy-app">
      {renderGifs(trendingData)}
    </div>
  );
}

export default App;
