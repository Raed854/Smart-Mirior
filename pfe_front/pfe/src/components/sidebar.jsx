// Sidebar.js

import React, { useState } from 'react';
import '../App.css';
import {
  FaHistory,
  FaSearch,
  FaThList,
  FaTh,
  FaBars,
  FaUserPlus,
  FaUserMinus,
  FaUserEdit,
} from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';


import logoImage from '../components/Assets/logo.jpg'; 

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAdminOptions, setShowAdminOptions] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/listesAdmin',
      name: 'Listes Admin',
      icon: <FaThList />,
      submenu: [
        {
          path: '/AddAdmin',
          name: 'Add Admin ',
          icon: <FaUserPlus />,
        },
        {
          path: '/DeletAdmin',
          name: 'Delete Admin',
          icon: <FaUserMinus />,
        },
        {
          path: '/ModifyAdmin',
          name: 'Modify Admin',
          icon: <FaUserEdit />,
        },
      ],
    },
    {
      path: '/listesUser',
      name: 'Listes User',
      icon: <FaThList />,
      submenu: [
        {
          path: '/AddUser',
          name: 'Add User',
          icon: <FaUserPlus />,
        },
        {
          path: '/DeletUser',
          name: 'Delete User',
          icon: <FaUserMinus />,
        },
        {
          path: '/ModifyUser',
          name: 'Modify User',
          icon: <FaUserEdit />,
        },
      ],
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <IoAnalytics />,
    },
    {
      path: '/historiques',
      name: 'Historiques',
      icon: <FaHistory />,
    },
  ];

  const toggleSidebar = () => {
    setShowAdminOptions(false);
    setShowUserOptions(false);
    setIsOpen(!isOpen);
  };

  const handleListClick = (section) => {
    if (section === 'listesAdmin') {
      setShowAdminOptions(!showAdminOptions);
      setShowUserOptions(false);
    } else if (section === 'listesUser') {
      setShowUserOptions(!showUserOptions);
      setShowAdminOptions(false);
    } else {
      setShowAdminOptions(false);
      setShowUserOptions(false);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMenuItems = menuItem.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
        <div className="top_section">
          <img
            src={logoImage}
            alt="Logo"
            style={{ display: isOpen ? 'block' : 'none', width: '100px', height: 'auto' }}
            className="logo"
          />
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggleSidebar} />
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <FaSearch onClick={toggleSidebar} className="search-icon" />
        </div>
        <ul>
          {filteredMenuItems.map((item, index) => (
            <li key={index} className={item.name === 'Dashboard' ? 'dashboard-li' : ''}>
              <NavLink
                to={item.path}
                className="link"
                activeClassName="active"
                onClick={() => handleListClick(item.path.slice(1))}
              >
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? 'block' : 'none' }} className="link-text">
                  {item.name}
                </div>
              </NavLink>
              {((item.path === '/listesAdmin' && showAdminOptions) ||
                (item.path === '/listesUser' && showUserOptions)) && (
                <ul className="submenu">
                  {item.submenu.map((submenuItem, submenuIndex) => (
                    <li key={submenuIndex}>
                      <NavLink
                        to={submenuItem.path}
                        className="link"
                        activeClassName="active"
                      >
                        <div className="icon">{submenuItem.icon}</div>
                        <div style={{ display: isOpen ? 'block' : 'none' }} className="link-text">
                          {submenuItem.name}
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
