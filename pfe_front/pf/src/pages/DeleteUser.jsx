import React, { useState } from 'react';
import Navbar from '../components/navbar';
import '../style/DeleteAdmin.css';

const DeleteUser = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container">
      <Navbar searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="content">
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default DeleteUser;