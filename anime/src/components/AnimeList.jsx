import Anime from './Anime';

function AnimeList({ title, series, onButtonClick, buttonText }) {
  const animeSeries = series.map((anime) => (
    <Anime
      anime={anime}
      key={anime.mal_id}
      onButtonClick={onButtonClick}
      buttonText={buttonText}
    />
  ));

  return (
    <div className="p-2 border rounded">
      <h2 className="text-center mb-4">{title}</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {animeSeries}
      </div>
    </div>
  );
}

export default AnimeList;
