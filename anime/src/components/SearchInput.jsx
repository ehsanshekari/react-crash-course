import { useState } from 'react';

function SearchInput({ onSearch, initialText }) {
  const [term, setTerm] = useState(initialText);

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };
 
  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search an Anime"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button type="submit" className="btn btn-outline-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
