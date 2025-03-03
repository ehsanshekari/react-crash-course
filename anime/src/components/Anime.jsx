function Anime({ anime, onButtonClick, buttonText }) {
  const onClick = () => {
    onButtonClick(anime);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={anime.images.jpg.image_url}
        className="card-img-top"
        alt="cover"
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{anime.title}</h5>
        <p className="card-text">{anime.score}</p>
        <a href="#" className="btn btn-primary" onClick={onClick}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default Anime;
