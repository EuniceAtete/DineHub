import { useState } from 'react';
import styles from './Settings.module.css';

function PersonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.chevron}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function Toggle({ on, onChange }) {
  return (
    <button
      type="button"
      className={`${styles.toggle} ${on ? styles.toggleOn : ''}`}
      onClick={() => onChange(!on)}
      aria-pressed={on}
    >
      <span className={styles.toggleKnob} />
    </button>
  );
}

function Settings() {
  const [newRequests, setNewRequests] = useState(true);
  const [clientUpdates, setClientUpdates] = useState(false);

  return (
    <div className={styles.page}>
      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <PersonIcon />
          <h2 className={styles.cardTitle}>Profile</h2>
        </div>
        <div className={styles.rowTwo}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="first-name">First Name</label>
            <input id="first-name" className={styles.input} type="text" defaultValue="Eunice" />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="last-name">Last Name</label>
            <input id="last-name" className={styles.input} type="text" defaultValue="Atete" />
          </div>
        </div>
        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input id="email" className={styles.input} type="email" defaultValue="euniceatete@gmail.com" />
        </div>
        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label className={styles.label} htmlFor="phone">Phone</label>
          <input id="phone" className={styles.input} type="tel" defaultValue="+250 788 000 000" />
        </div>
      </section>

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <PinIcon />
          <h2 className={styles.cardTitle}>Notifications</h2>
        </div>
        <div className={styles.toggleRow}>
          <div className={styles.toggleInfo}>
            <h4>New requests</h4>
            <p>Get notified when a new request comes in</p>
          </div>
          <Toggle on={newRequests} onChange={setNewRequests} />
        </div>
        <div className={styles.toggleRow}>
          <div className={styles.toggleInfo}>
            <h4>Client updates</h4>
            <p>Alerts when a client updates their profile</p>
          </div>
          <Toggle on={clientUpdates} onChange={setClientUpdates} />
        </div>
      </section>

      <section className={styles.card}>
        <div className={styles.cardHeader}>
          <ClockIcon />
          <h2 className={styles.cardTitle}>Language & Time</h2>
        </div>
        <div className={styles.rowTwo}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="language">Language</label>
            <div className={styles.selectWrap}>
              <select id="language" className={styles.select} defaultValue="en">
                <option value="en">English</option>
              </select>
              <ChevronDown />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="timezone">Time</label>
            <div className={styles.selectWrap}>
              <select id="timezone" className={styles.select} defaultValue="cat">
                <option value="cat">Rwanda (CAT)</option>
              </select>
              <ChevronDown />
            </div>
          </div>
        </div>
      </section>

      {/* SAUCE BOTTLE PLACEHOLDER */}
      <div className={styles.saucePlaceholder} />
    </div>
  );
}

export default Settings;
