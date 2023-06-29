import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <input type="text" onChange={handleSearch} placeholder="Search contacts" />
  );
};

export default SearchBar;
