import { useState } from 'react';
import styles from './ClientOrders.module.css';

const ORDERS = [
  {
    id: 1,
    items: 'Chocolate Lava Cake x1, Passion Fruit Cheesecake x2',
    price: 'Frw 12,800',
    table: '3',
    guest: '0788 234 567',
  },
  {
    id: 2,
    items: 'Singapore Sling x2, Tom Yummy x1',
    price: 'Frw 15,000',
    table: '7',
    guest: '0722 345 678',
  },
  {
    id: 3,
    items: 'Grilled Tilapia x1, Ugali x2, Beans x1',
    price: 'Frw 8,500',
    table: '1',
    guest: '0788 456 789',
  },
  {
    id: 4,
    items: 'Mandazi & Honey Dip x3, Banana Beignets x2',
    price: 'Frw 10,000',
    table: '12',
    guest: '0722 567 890',
  },
];

const FILTERS = ['All', 'New', 'Delivered', 'Rejected'];

const STATS = [
  { value: 8, label: 'Delivered' },
  { value: 1, label: 'Rejected' },
  { value: 43, label: 'All' },
];

function ClientOrders() {
  const [activeFilter, setActiveFilter] = useState('New');

  return (
    <div className={styles.page}>
      {/* FRUIT PLATE PLACEHOLDER */}
      <div className={styles.fruitPlaceholder} />

      <h1 className={styles.pageTitle}>Orders</h1>

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
        <div className={styles.ordersList}>
          {ORDERS.map((order) => (
            <article key={order.id} className={styles.orderCard}>
              <div className={styles.orderLeft}>
                <div className={styles.orderMeta}>
                  <div className={styles.orderHeader}>
                    <span className={styles.orderLabel}>Order {order.id}</span>
                    <span className={styles.headerDivider} aria-hidden="true" />
                    <span className={styles.statusBadge}>New</span>
                  </div>
                  <p className={styles.itemsList}>{order.items}</p>
                  <span className={styles.orderPrice}>{order.price}</span>
                </div>
              </div>
              <div className={styles.orderRight}>
                <span className={styles.guestLabel}>Guest</span>
                <span className={styles.guestPhone}>{order.guest}</span>
              </div>
              <span className={styles.tableNum}>Table {order.table}</span>
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
        <span>Page 5 of 6</span>
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

export default ClientOrders;
