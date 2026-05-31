import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoImg from '../../assets/Landing/Logo.png';

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="DineHub Logo" className={styles.logoIcon} />
          <span className={styles.logoText}>
            Dine<span className={styles.logoHighlight}>Hub</span>
          </span>
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <a href="#how-it-works" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>How it Works</a>
          <a href="#features" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#about-us" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#pricing" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.signUpBtn} onClick={() => navigate('/signup')}>
            Sign Up
          </button>
          <button type="button" className={styles.signInBtn} onClick={() => navigate('/login')}>
            Login
          </button>
          <button
            type="button"
            className={`${styles.mobileMenuToggle} ${mobileMenuOpen ? styles.toggleActive : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
