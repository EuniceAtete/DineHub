import React from "react";
import styles from "./HowItWorks.module.css";
import shrimpsImg from "../../assets/Landing/shrimps.png";
import whiteStrokeImg from "../../assets/Landing/white stroke.png";
import dashboardImg from "../../assets/Landing/Dashboard Group.png";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Register Your Restaurant",
      description: "Sign up and create your restaurant profile on our platform in a few simple steps.",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Create Your Digital Menu",
      description: "Customize and build a beautiful online menu for your customers to browse.",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Receive & Manage Orders",
      description: "Manage incoming dine-in, takeaway, and delivery orders from our dashboard.",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      {/* Decorative Assets */}
      <img src={dashboardImg} alt="DineHub Dashboard Screenshots" className={styles.dashboardImage} />
      <img src={shrimpsImg} alt="Delicious grilled prawns" className={styles.shrimpsImage} />
      
      {/* White Brush Stroke Background Banner */}
      <div className={styles.strokeContainer}>
        <img src={whiteStrokeImg} alt="" className={styles.whiteStrokeBg} />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>How It Works</span>
          <h2 className={styles.title}>Three simple steps to run your restaurant.</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>{step.number}</span>
                <div className={styles.iconWrapper}>{step.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
