import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = ({ searchQuery, handleSearch }) => {
  return (
    <nav className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
        <span className="search-icon">
          <FaSearch />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;