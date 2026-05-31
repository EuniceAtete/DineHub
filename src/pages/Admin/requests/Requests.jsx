import { useState } from 'react';
import styles from './Requests.module.css';

const REQUESTS = [
  {
    id: 1,
    title: 'Request to join SupaMenu',
    restaurant: 'Ryoherwa Resto',
    userId: '345',
    table: '3',
    flagged: false,
  },
  {
    id: 2,
    title: 'Confirmation on Pro Membership',
    restaurant: 'MeNU Pub',
    userId: 'Pro 678',
    table: '7',
    flagged: true,
  },
  {
    id: 3,
    title: 'Request for a restaurant management meeting',
    restaurant: 'Soy Restaurant',
    userId: 'Pro 675',
    table: '1',
    flagged: true,
  },
  {
    id: 4,
    title: 'Request to join SupaMenu Pro',
    restaurant: 'Chez Lando Resto',
    userId: '567',
    table: '12',
    flagged: false,
  },
];

const FILTERS = ['All', 'New', 'Pro Members', 'Employees'];

const STATS = [
  { value: 6, label: 'New Requests' },
  { value: 2, label: 'Pro Members' },
  { value: 158, label: 'All' },
];

function Requests() {
  const [activeFilter, setActiveFilter] = useState('New');

  return (
    <div className={styles.page}>
      <h2 className={styles.pageHeading}>Orders</h2>

      <div className={styles.filters}>
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`${styles.filterTab} ${activeFilter === filter ? styles.filterTabActive : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.contentRow}>
        <div className={styles.requestsList}>
          {REQUESTS.map((req) => (
            <article key={req.id} className={styles.requestCard}>
              <div className={styles.requestLeft}>
                <div className={styles.requestMeta}>
                  <span className={styles.requestLabel}>Request {req.id}</span>
                  <span className={styles.statusBadge}>New</span>
                </div>
                <h3 className={styles.requestTitle}>{req.title}</h3>
                <span className={styles.restaurantName}>{req.restaurant}</span>
              </div>
              <div className={styles.requestRight}>
                {req.flagged ? (
                  <span className={styles.warningIcon} aria-label="Flagged">⚠</span>
                ) : (
                  <span className={styles.warningSpacer} />
                )}
                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>User ID</span>
                  <span className={styles.detailValue}>{req.userId}</span>
                </div>
                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>Table N</span>
                  <span className={styles.detailValue}>{req.table}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.statsColumn}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statBlock}>
              <div className={styles.statNumber}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pagination}>
        <span>Page 1 of 2</span>
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
  );
}

export default Requests;
