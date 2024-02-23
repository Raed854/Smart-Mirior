import React, { useState } from 'react';
import '../App.css';
import { GiHistogram } from 'react-icons/gi';
import { RiHistoryFill } from 'react-icons/ri';
import { FaThList, FaTh, FaBars, FaUserPlus, FaUserMinus, FaUserEdit } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAdminOptions, setShowAdminOptions] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);

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
          name: 'Add Admin',
          icon: <FaUserPlus />,
        },
        {
          path: '/DeleteAdmin',
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
          path: '/DeleteUser',
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
      icon: <GiHistogram />,
    },
    {
      path: '/historiques',
      name: 'Historiques',
      icon: <RiHistoryFill />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? '300px' : '100px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            logo
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggleSidebar} />
          </div>
        </div>
        <ul>
          {menuItem.map((item, index) => (
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
              {((item.path === '/listesAdmin' && showAdminOptions) || (item.path === '/listesUser' && showUserOptions)) && (
                <ul className="submenu">
                  {item.submenu.map((submenuItem, submenuIndex) => (
                    <li key={submenuIndex}>
                      <NavLink to={submenuItem.path} className="link" activeClassName="active">
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
