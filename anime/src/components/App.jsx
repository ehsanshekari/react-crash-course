import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchInput from './SearchInput';
import AnimeList from './AnimeList';
import Loading from './Loading/Loading';

function App() {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [series, setSeries] = useState([]);
  const initialSearchTerm = 'dororo';
  const [animeResponse, setAnimeResponse] = useState({
    series: [],
    loading: false,
    error: null,
  });
  const [favoriteAnimeSeries, setFavoriteAnimeSeries] = useState([]);

  const search = async (term) => {
    setAnimeResponse({ series: [], error: null, loading: true });
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?limit=6&q=${term}`
      );
      setAnimeResponse({
        series: response.data.data,
        error: null,
        loading: false,
      });
    } catch (e) {
      setAnimeResponse({ series: [], error: e.message, loading: false });
    }
  };

  useEffect(() => {
    search(initialSearchTerm);
  }, []);

  const onAddToFavorites = (anime) => {
    setFavoriteAnimeSeries((prevFavorites) =>
      prevFavorites.some((fav) => fav.mal_id === anime.mal_id)
        ? prevFavorites
        : [anime, ...prevFavorites]
    );
  };

  const onRemoveFromFavorites = (anime) => {
    setFavoriteAnimeSeries((prevFavorites) =>
      prevFavorites.filter((fav) => fav.mal_id !== anime.mal_id)
    );
  };

  const renderContent = () => {
    const { series, loading, error } = animeResponse;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }

    return (
      <div className="row">
        <div className="col-6">
          <AnimeList
            series={series}
            title="Anime Series"
            onButtonClick={onAddToFavorites}
            buttonText="Add to Favorites"
          />
        </div>
        <div className="col-6">
          <AnimeList
            series={favoriteAnimeSeries}
            title="Your Favorites Anime Series"
            buttonText="Remove from Favorites"
            onButtonClick={onRemoveFromFavorites}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <SearchInput onSearch={search} initialText={initialSearchTerm} />
      {renderContent()}
    </div>
  );
}

export default App;
