import React from 'react';
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <nav className={styles.navbar} style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <h1>RAPID INNOVATION</h1>
      <ul>
        <li><Link style={{color: theme === 'light' ? 'black' : 'white'}} to="/">Home</Link></li>
        <li><Link style={{color: theme === 'light' ? 'black' : 'white'}} to="/contact">Contact Us</Link></li>
        <li><Link style={{color: theme === 'light' ? 'black' : 'white'}} to="/taskPage">TaskPage</Link></li>
        <div>
          <ThemeToggle />
        </div>
      </ul>
    </nav>
  )
}
