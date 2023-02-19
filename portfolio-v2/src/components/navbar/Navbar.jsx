import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {

  return (
    <header className='header'>
      <a href="/" as={Link} to="/home" className='logo'>Portfolio</a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
        <Link href="/" className="active " as={Link} to="/">
          Home</Link>
        <Link href="about" as={Link} to="/about">
          About</Link>
        <Link href="portfolio" as={Link} to="/portfolio">
          Portfolio</Link>
        <Link href="contact" as={Link} to="/contact">
          Contact</Link>
      </nav>
    </header>
  )
}
