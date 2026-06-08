import { useState } from 'react';
import styles from './MyAccount.module.css';

const LOGINS = [
  { date: '2026-06-08', time: '09:42', device: 'Chrome on Windows', location: 'Kigali, Rwanda' },
  { date: '2026-06-07', time: '18:15', device: 'Edge on Windows', location: 'Kigali, Rwanda' },
  { date: '2026-06-06', time: '08:31', device: 'Safari on iPhone', location: 'Kigali, Rwanda' },
];

const STATS = [
  { label: 'Total Actions', value: '1,247' },
  { label: 'Last Active', value: '2 hours ago' },
  { label: 'Approvals', value: '318' },
  { label: 'Sessions', value: '45' },
];

function MyAccount() {
  const [form, setForm] = useState({ current: '', next: '', confirm: '' });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({ current: '', next: '', confirm: '' });
  };

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.pageHeading}>My Account</h1>
          <p className={styles.pageSubtext}>Profile, security, and recent admin activity.</p>
        </div>
      </div>

      <section className={styles.profileCard}>
        <div className={styles.avatar}>EA</div>
        <div>
          <h2 className={styles.profileName}>Eunice Atete</h2>
          <p className={styles.profileEmail}>euniceatete@gmail.com</p>
          <span className={styles.roleBadge}>Super Admin</span>
        </div>
      </section>

      <section className={styles.statsGrid}>
        {STATS.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className={styles.contentGrid}>
        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Change Password</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Current Password</span>
              <input name="current" type="password" className={styles.input} value={form.current} onChange={updateField} />
            </label>
            <label className={styles.field}>
              <span>New Password</span>
              <input name="next" type="password" className={styles.input} value={form.next} onChange={updateField} />
            </label>
            <label className={styles.field}>
              <span>Confirm Password</span>
              <input name="confirm" type="password" className={styles.input} value={form.confirm} onChange={updateField} />
            </label>
            <button type="submit" className={styles.primaryBtn}>Update Password</button>
          </form>
        </article>

        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Recent Login Activity</h2>
          <div className={styles.activityList}>
            {LOGINS.map((login, index) => (
              <div key={`${login.date}-${login.time}`} className={styles.activityRow}>
                <div>
                  <strong>{login.device}</strong>
                  <span>{login.location}</span>
                </div>
                <time>{login.date} · {login.time}</time>
                {index === 0 && <span className={styles.currentBadge}>Current</span>}
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default MyAccount;
