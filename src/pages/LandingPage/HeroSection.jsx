import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';
import steakImg from '../../assets/Landing/steak-og.png';
import herbsImg from '../../assets/Landing/Herbs and Spices.png';
import spicesLeftImg from '../../assets/Landing/Spices.png';
import brushstrokeImg from '../../assets/Landing/brushstroke.png';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <img src={spicesLeftImg} alt="Spices" className={styles.spicesLeft} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.tagline}>
            <span>RESTAURANT MANAGEMENT PLATFORM</span>
          </div>
          <h1 className={styles.title}>
            Your Restaurants,<br />
            Fully in <span className={styles.highlight}>control</span>
          </h1>
          <p className={styles.description}>
            The smartest way to manage your menu, orders and revenue.
          </p>
          <div className={styles.buttonGroup}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => navigate('/signup')}
            >
             Register Your Resto →
            </button>
            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={herbsImg} alt="" className={styles.herbsBackground} />
          <div className={styles.steakWrapper}>
            <img src={steakImg} alt="Sizzling Steak Platter" className={styles.steakImage} />
          </div>
        </div>
      </div>

      <div className={styles.brushstrokes}>
        {Array.from({ length: 12 }).map((_, index) => (
          <img key={index} src={brushstrokeImg} alt="" className={styles.brushstroke} />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
