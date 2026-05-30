import React from "react";
import styles from "./HeroSection.module.css";
import steakImg from "../../assets/Landing/steak-og.png";
import herbsImg from "../../assets/Landing/Herbs and Spices.png";
import spicesLeftImg from "../../assets/Landing/Spices.png";
import brushstrokeImg from "../../assets/Landing/brushstroke.png";

function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Decorative Left Edge Spices */}
      <img src={spicesLeftImg} alt="Spices" className={styles.spicesLeft} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.tagline}>
            <span>Introducing DineHub Platform</span>
          </div>
          <h1 className={styles.title}>
            Your Restaurants,<br />
            Fully in <span className={styles.highlight}>control</span>
          </h1>
          <p className={styles.description}>
            The ultimate management platform for tables, menu, reservations and online built for growth. 
            <span className={styles.greenDot}></span>
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>Explore our Features</button>
            <button className={styles.secondaryBtn}>Book a quick Demo</button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          {/* Background Herbs & Spices */}
          <img src={herbsImg} alt="" className={styles.herbsBackground} />
          {/* Main Steak Image */}
          <div className={styles.steakWrapper}>
            <img src={steakImg} alt="Sizzling Steak Platter" className={styles.steakImage} />
          </div>
        </div>
      </div>

      {/* Tiled brushstrokes at the bottom of the section */}
      <div className={styles.brushstrokes}>
        <img src={brushstrokeImg} alt="" className={styles.brushstroke} />
        <img src={brushstrokeImg} alt="" className={styles.brushstroke} />
        <img src={brushstrokeImg} alt="" className={styles.brushstroke} />
      </div>
    </section>
  );
}

export default HeroSection;
