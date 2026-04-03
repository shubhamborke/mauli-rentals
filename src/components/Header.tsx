import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/gallery', label: 'Vehicle Gallery' },
  { path: '/about', label: 'About' },
  { path: '/terms', label: 'Terms & Conditions' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/logo/Screenshot 2026-03-22 131018.png" alt="Bike on Rent" />
      </Link>
      <img src="/profile-photo/Gajanan Maharaj Photo.png" alt="Gajanan Maharaj" style={{width: '50px', height: '50px'}}/>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>


      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`${styles.navLink} ${location.pathname === path ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
