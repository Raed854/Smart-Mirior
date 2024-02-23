import React, { useState, useEffect } from 'react';

const ModifyAdminPage = ({ match }) => {
  const [adminData, setAdminData] = useState({
    id: '',
    username: '',
    email: '',
   
  });

  useEffect(() => {
 
    if (match && match.params) {
      const simulateFetchAdminData = async () => {
        setTimeout(() => {
          const simulatedData = {
            id: match.params.id,
            username: 'JohnDoe',
            email: 'johndoe@example.com',
          };
          setAdminData(simulatedData);
        }, 500); 
      };

      simulateFetchAdminData();
    }
  }, [match]);

  const handleInputChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      alert('Admin data updated successfully!');
    }, 500); 
  };

  return (
    <div>
      <h2>Modify Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={adminData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={adminData.email}
            onChange={handleInputChange}
          />
        </label>
        {/* Add other fields as needed */}
        <br />
        <button type="submit">Update Admin</button>
      </form>
    </div>
  );
};

export default ModifyAdminPage;
