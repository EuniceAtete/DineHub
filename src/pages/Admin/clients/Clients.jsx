import { useState } from 'react';
import styles from './Clients.module.css';
import AddClientModal from './AddClientModal';

const CLIENTS = [
  { name: 'Soy Restaurant', category: 'RESTO', sales: '24,000,000 RWF', updated: 'Updated 1 day ago' },
  { name: 'M Hotel', category: 'HOTEL', sales: '24,000,000 RWF', updated: 'Updated 2 days ago' },
  { name: 'Sundowner', category: 'PUB', sales: '24,000,000 RWF', updated: 'Updated 4 days ago' },
  { name: 'Choose Kigali', category: 'RESTO', sales: '24,000,000 RWF', updated: 'Updated 1 week ago' },
  { name: 'Planet Burger', category: 'HOTEL', sales: '24,000,000 RWF', updated: 'Updated 2 weeks ago' },
  { name: 'Chez Lando', category: 'PUB', sales: '24,000,000 RWF', updated: 'Updated 3 weeks ago' },
  { name: 'Fairy Home', category: 'RESTO', sales: '24,000,000 RWF', updated: 'Updated 1 month ago' },
  { name: 'Izere Lounge', category: 'HOTEL', sales: '24,000,000 RWF', updated: 'Updated 2 months ago' },
  { name: 'Take It Up', category: 'PUB', sales: '24,000,000 RWF', updated: 'Updated 2 months ago' },
];

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CategoryBadge({ category }) {
  if (category === 'RESTO') {
    return <span className={styles.badgeResto}>{category}</span>;
  }
  return <span className={styles.badgePill}>{category}</span>;
}

function Clients() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <h2 className={styles.pageHeading}>Clients</h2>
        <div className={styles.addClient}>
          <span className={styles.addClientText}>Add new client</span>
          <button
            type="button"
            className={styles.addBtn}
            aria-label="Add new client"
            onClick={() => setModalOpen(true)}
          >
            +
          </button>
        </div>
      </div>

      <h3 className={styles.subHeading}>All Clients</h3>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Clients Details</th>
              <th>Category</th>
              <th>Sales</th>
              <th>Detailed Reports</th>
            </tr>
          </thead>
          <tbody>
            {CLIENTS.map((client) => (
              <tr key={client.name}>
                <td>
                  <div className={styles.clientName}>{client.name}</div>
                  <div className={styles.clientUpdated}>{client.updated}</div>
                </td>
                <td>
                  <CategoryBadge category={client.category} />
                </td>
                <td>
                  <span className={styles.sales}>{client.sales}</span>
                </td>
                <td>
                  <div className={styles.reportsCell}>
                    <button type="button" className={styles.eyeBtn} aria-label="View report">
                      <EyeIcon />
                    </button>
                    <button type="button" className={styles.menuBtn} aria-label="More options">
                      ···
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <span>Page 1 of 12</span>
          <div className={styles.pageArrows}>
            <button type="button" className={styles.pageArrow} aria-label="Previous page">
              &lt;
            </button>
            <button type="button" className={styles.pageArrow} aria-label="Next page">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* FOOD IMAGE PLACEHOLDER */}
      <div className={styles.foodPlaceholder} />

      {modalOpen && <AddClientModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default Clients;
