import { useState } from 'react';
import styles from './Settings.module.css';

const ROLES = [
  { name: 'Super Admin', permissions: ['Clients', 'Orders', 'Reports', 'Settings'] },
  { name: 'Operations', permissions: ['Clients', 'Orders'] },
  { name: 'Finance', permissions: ['Reports'] },
  { name: 'Marketing', permissions: ['Reports'] },
];

const PERMISSIONS = ['Clients', 'Orders', 'Reports', 'Settings'];

function Toggle({ checked, onChange }) {
  return (
    <button type="button" className={`${styles.toggle} ${checked ? styles.toggleOn : ''}`} onClick={() => onChange(!checked)} aria-pressed={checked}>
      <span />
    </button>
  );
}

function Settings() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [requestAlerts, setRequestAlerts] = useState(true);
  const [paymentAlerts, setPaymentAlerts] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.pageHeading}>Settings</h1>
          <p className={styles.pageSubtext}>Platform defaults, notifications, and role permissions.</p>
        </div>
        <button type="button" className={styles.primaryBtn}>Save</button>
      </div>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Platform Settings</h2>
          <label className={styles.field}>
            <span>Site Name</span>
            <input className={styles.input} defaultValue="DineHub Admin" />
          </label>
          <label className={styles.field}>
            <span>Logo Upload</span>
            <button type="button" className={styles.uploadBtn}>Choose Logo</button>
          </label>
          <label className={styles.field}>
            <span>Default Currency</span>
            <select className={styles.input} defaultValue="RWF">
              <option value="RWF">RWF</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </article>

        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Notifications</h2>
          <div className={styles.toggleRow}>
            <div><strong>Email summaries</strong><span>Daily admin digest</span></div>
            <Toggle checked={emailAlerts} onChange={setEmailAlerts} />
          </div>
          <div className={styles.toggleRow}>
            <div><strong>New requests</strong><span>Alert on pending approvals</span></div>
            <Toggle checked={requestAlerts} onChange={setRequestAlerts} />
          </div>
          <div className={styles.toggleRow}>
            <div><strong>Payment issues</strong><span>Alert on failed transactions</span></div>
            <Toggle checked={paymentAlerts} onChange={setPaymentAlerts} />
          </div>
        </article>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>User Role Management</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Role</th>
                {PERMISSIONS.map((permission) => <th key={permission}>{permission}</th>)}
              </tr>
            </thead>
            <tbody>
              {ROLES.map((role) => (
                <tr key={role.name}>
                  <td className={styles.roleName}>{role.name}</td>
                  {PERMISSIONS.map((permission) => (
                    <td key={permission}>
                      <input type="checkbox" className={styles.checkbox} defaultChecked={role.permissions.includes(permission)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Settings;
