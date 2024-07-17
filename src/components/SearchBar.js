import React from 'react';

function SearchBar({ setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search employees..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;


