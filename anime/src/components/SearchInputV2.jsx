import { useState } from "react";

function SearchInputV2({
  onSearch,
  value,
  onChange,
  placeholderText = "Search an Anime",
  SearchButtonText = "Search",
}) {

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder={placeholderText}
          onChange={onChange}
          value={value}
        />
        <button type="submit" className="btn btn-outline-primary">
          {SearchButtonText}
        </button>
      </div>
    </form>
  );
}

export default SearchInputV2;
