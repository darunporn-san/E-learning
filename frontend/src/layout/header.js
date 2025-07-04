import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const listMenu = [
    {
      name: 'Home',
      href: '/',
    },
    // {
    //   name: 'About',
    //   href: '/about',
    // },
    {
      name: 'Courses',
      href: '/course-list',
    },
    // {
    //   name: 'Contact',
    //   href: '/contact',
    // },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className="navbar is-white is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
             <div className="navbar-item-logo ">
            <BookOpen className="mr-2" size={32} color="#00D1B2" />
            <span className="has-text-primary has-text-weight-bold is-size-4">
              EduLearn
            </span>
            {/* </a> */}
          </div>

          <a
            role="button"
            className={`navbar-burger ${isMenuOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            {listMenu.map((menu, index) => {
              return (
                <Link
                  key={index}
                  to={menu.href}
                  className={`navbar-item has-text-dark ${
                    isActive(menu.href) ? 'is-active' : ''
                  }`}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/login" className="button is-light has-text-primary">
                  <strong>Log In</strong>
                </Link>
                <Link to="/register" className="button is-primary has-text-white">
                  <strong>Sign Up</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;