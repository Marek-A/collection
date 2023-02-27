import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '../../pages/styles/mediaqueries.css';

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => {
    setMenuIcon(!menuIcon);
    setNavbar(!navbar);
  };

  const handleMenuClick = () => {
    const menuIconEl = document.querySelector("#menu-icon");
    const navbarEl = document.querySelector(".navbar");
    menuIconEl.classList.toggle("bx-x");
    navbarEl.classList.toggle("active");
  };

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navlinks.forEach((link) => {
            link.classList.remove("active");
            const navLink = document.querySelector(`header nav a[href*=${id}]`);
            if (navLink) {
              navLink.classList.add("active");
            }
          });
        }
      });
    };
  }, []);

  return (
    <header className='header'>
      <a href='/' as={Link} to='/' className='logo'>
        angelstok.ee
      </a>
      <i
        className={`bx ${menuIcon ? 'bx-x' : 'bx-menu'}`}
        id='menu-icon'
        onClick={() => {
          toggleMenu();
          handleMenuClick();
          menuIcon.onClick();
        }}
      ></i>
      <nav className={`navbar ${navbar ? 'active' : ''}`}>
        <Link href='/' className='active' as={Link} to='/' onClick={(event) => handleLinkClick(event, 'home')}>
          Home
        </Link>
        <Link href='about' as={Link} to='/about' onClick={(event) => handleLinkClick(event, 'about')}>
          About
        </Link>
        <Link href='portfolio' as={Link} to='/portfolio' onClick={(event) => handleLinkClick(event, 'portfolio')}>
          Portfolio
        </Link>
        <Link href='contact' as={Link} to='/contact' onClick={(event) => handleLinkClick(event, 'contact')}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
