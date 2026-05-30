import React, { useState } from "react";
import styles from "./Features.module.css";
import whiteStrokeImg from "../../assets/Landing/white stroke.png";
import spaghettiImg from "../../assets/Landing/spaghetti.png";

function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const featureList = [
    {
      title: "Digital Store Management",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      )
    },
    {
      title: "Create Your Digital Menu",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Real-time Order Tracking",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      title: "Revenue & Analytics",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.contentCol}>
            {/* Header Badge with white stroke behind it */}
            <div className={styles.badgeWrapper}>
              <img src={whiteStrokeImg} alt="" className={styles.badgeStroke} />
              <span className={styles.badgeText}>FEATURES</span>
            </div>

            <h2 className={styles.title}>Everything you need to run smarter.</h2>
            <p className={styles.description}>
              Take your restaurant management to the next level with our advanced tools. 
              Configure menus, receive digital payments, and track table metrics live.
            </p>

            <div className={styles.featuresList}>
              {featureList.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.featureItem} ${activeFeature === idx ? styles.active : ""}`}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  <div className={styles.featureItemLeft}>
                    <div className={styles.iconBox}>{item.icon}</div>
                    <span className={styles.featureTitle}>{item.title}</span>
                  </div>
                  <div className={styles.arrowBox}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <button className={styles.getStartedBtn}>Get Started</button>
          </div>

          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={spaghettiImg} alt="Spaghetti Bowl with Chopsticks" className={styles.mainImage} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
