// AddAdmin.js

import React, { useState } from "react";
import '../style/AddAdmin.css';

const initialFValues = {
  id: '0',
  Name: '',
  FamilyName: '',
  Email: '',
  Mobile: '',
  Gender: 'male',
  StartUpId: 'StartUp Village',
  Image: null,
};

const AddUser = () => {
  const [values, setValues] = useState(initialFValues);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", values);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Add User</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="Name">Name:</label>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    value={values.Name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="FamilyName">Family Name:</label>
                  <input
                    type="text"
                    id="FamilyName"
                    name="FamilyName"
                    value={values.FamilyName}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">Email:</label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={values.Email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Mobile">Mobile:</label>
                  <input
                    type="tel"
                    id="Mobile"
                    name="Mobile"
                    value={values.Mobile}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Gender">Gender:</label>
                  <select
                    id="Gender"
                    name="Gender"
                    value={values.Gender}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="StartUpId">StartUp ID:</label>
                  <select
                    id="StartUpId"
                    name="StartUpId"
                    value={values.StartUpId}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="medianet">MediaNet</option>
                    <option value="StartUp Village">StartUp Village</option>
                    <option value="Express Fm">Express Fm</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Image">Image:</label>
                  <input
                    type="file"
                    id="Image"
                    name="Image"
                    accept="image/*"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
