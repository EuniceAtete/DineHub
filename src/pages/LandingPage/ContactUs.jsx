import React from "react";
import styles from "./ContactUs.module.css";
import martiniImg from "../../assets/Landing/martini.png";
import logoImg from "../../assets/Landing/DineHub Logo.png";
import instagramIcon from "../../assets/Landing/logo_instagram.png";
import facebookIcon from "../../assets/Landing/logos_facebook.png";
import linkedinIcon from "../../assets/Landing/logo_linkedin.png";
import xIcon from "../../assets/Landing/logo_x.png";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    alert("Message sent successfully!");
  };

  return (
    <footer id="contact" className={styles.footerSection}>
      {/* Contact Us Segment */}
      <div className={styles.contactContainer}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Contact Us</span>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.sectionDesc}>We'd love to hear from you.</p>
        </div>

        <div className={styles.grid}>
          {/* Info Column */}
          <div className={styles.infoCol}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <a href="mailto:hello@dinehub.rw" className={styles.infoValue}>hello@dinehub.rw</a>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <a href="tel:+250788000000" className={styles.infoValue}>+250 788 000 000</a>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Kigali, Rwanda</span>
            </div>
          </div>

          {/* Form Column */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className={styles.input} 
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={styles.input} 
                  required 
                />
              </div>
              <div className={styles.inputGroup}>
                <textarea 
                  placeholder="Your message" 
                  rows="5" 
                  className={styles.textarea} 
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message <span className={styles.btnArrow}>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Martini Glass Image */}
      <img src={martiniImg} alt="" className={styles.martiniImage} />

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Footer Branding & Nav Segment */}
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerMain}>
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <img src={logoImg} alt="DineHub Logo" className={styles.logo} />
              <span className={styles.logoText}>
                Dine<span className={styles.logoHighlight}>Hub</span>
              </span>
            </div>
            <p className={styles.tagline}>Your Restaurant, Fully in control</p>
          </div>

          <div className={styles.footerNav}>
            <a href="#how-it-works" className={styles.footerLink}>Home</a>
            <a href="#about-us" className={styles.footerLink}>About</a>
            <a href="#features" className={styles.footerLink}>Features</a>
            <a href="#pricing" className={styles.footerLink}>Pricing</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
          </div>
        </div>

        <div className={styles.footerCopyrightRow}>
          <div className={styles.socials}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <img src={xIcon} alt="X (Twitter)" className={styles.socialIcon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>
          </div>

          <p className={styles.copyright}>
            &copy; 2026 DineHub. All rights reserved. Made with <span className={styles.heart}>💚</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ContactUs;
