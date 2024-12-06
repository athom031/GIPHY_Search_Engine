import { useEffect, useState } from "react";
import { API_ENDPOINT, HARDCODED_API_KEY, SEARCH, TRENDING } from "../src/api";
import "./App.css";

// https://developers.giphy.com/docs/api/endpoint/


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ?? HARDCODED_API_KEY;

function App() {
  const [trendingData, setTrendingData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [displayData, setDisplayData] = useState([]);

  // Fetch trending GIFs initially
  useEffect(() => {
    fetch(`${API_ENDPOINT}${TRENDING}?api_key=${API_KEY}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setTrendingData(data.data);
        setDisplayData(data.data);
      })
      .catch((error) => console.error("Error fetching trending GIFs:", error));
  }, []);

  // Debounce searchTerm
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch search results whenever debouncedSearchTerm changes
  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setDisplayData(trendingData);
      return;
    }

    fetch(
      `${API_ENDPOINT}${SEARCH}?api_key=${API_KEY}&q=${debouncedSearchTerm}&limit=10`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length > 0) {
          setDisplayData(data.data);
        } else {
          setDisplayData(trendingData);
        }
      })
      .catch((error) => console.error("Error fetching search GIFs:", error));
  }, [debouncedSearchTerm, trendingData]);

  const renderGifs = (gifs) => {
    const radius = 250;
    const offset = 0.5;

    return (
      <>
        {gifs.map((gif, index) => {
          const angle = (index * 360) / gifs.length;
          const x =
            radius * Math.cos((angle + index * offset) * (Math.PI / 180));
          const y =
            radius * Math.sin((angle + index * offset) * (Math.PI / 180));

          return (
            <div
              className="gif-circle"
              key={gif.id}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <iframe
                src={gif.embed_url}
                width="100%"
                height="100%"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title={gif.title}
              ></iframe>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="giphy-app">
      <div className="halo-container">
        <div className="center-container">
          <h1 className="page-title">Find the Perfect GIF</h1>
          <input
            type="text"
            placeholder="Search from GIPHY..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>
        {renderGifs(displayData)}
      </div>
    </div>
  );
}

export default App;
