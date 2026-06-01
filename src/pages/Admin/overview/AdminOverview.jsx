import { useState } from 'react';
import styles from './AdminOverview.module.css';
import customersIcon from '../../../assets/Admin/customers.png';
import revenueIcon from '../../../assets/Admin/revenue.png';
import ordersIcon from '../../../assets/Admin/orders.png';
import lobsterImg from '../../../assets/Admin/lobster.png';

const STATS = [
  { label: 'Total Clients', value: '60', icon: customersIcon, active: true },
  { label: 'Total Revenue', value: '38,300,000', icon: revenueIcon },
  { label: 'Total Orders', value: '67,569', icon: ordersIcon },
];

const TREND_DATA = [
  { time: '8am',  value: 20000 },
  { time: '9am',  value: 11000 },
  { time: '10am', value: 30000 },
  { time: '11am', value: 25000 },
  { time: '12am', value: 27000 },
  { time: '1pm',  value: 29000 },
  { time: '2pm',  value: 10000 },
  { time: '3pm',  value: 13000 },
];

const HIGHLIGHT_TIMES = new Set(['8am', '10am', '1pm']);

const BUSINESS_TYPES = [
  { label: 'Restaurants', amount: '24,000,000 RWF', dot: 'orange' },
  { label: 'Hotels',      amount: '10,300,000 RWF', dot: 'grey'   },
  { label: 'Pubs',        amount: '4,000,000 RWF',  dot: 'grey'   },
];

const RECENT_CLIENTS = [
  { name: 'Soy Restaurant', updated: 'Updated 1 day ago',  category: 'RESTO', revenue: '24,000,000 RWF' },
  { name: 'M Hotel',        updated: 'Updated 2 days ago', category: 'HOTEL', revenue: '10,300,000 RWF' },
  { name: 'Sundowner',      updated: 'Updated 4 days ago', category: 'PUB',   revenue: '4,000,000 RWF'  },
  { name: 'EuniCafe',       updates: 'Updated a week ago', category: 'CAFE',  revenue: '1,043,000 RWF'},
];

function CategoryBadge({ category }) {
  if (category === 'RESTO') return <span className={styles.badgeResto}>{category}</span>;
  return <span className={styles.badgePill}>{category}</span>;
}

function AdminOverview() {
  const [chartPeriod, setChartPeriod] = useState('Today');

  return (
    <div className={styles.page}>

      {/* ── Stat Cards ── */}
      <div className={styles.statsRow}>
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={`${styles.statCard} ${stat.active ? styles.statCardActive : ''}`}
          >
            <div className={styles.statHeader}>
              <img src={stat.icon} alt="" className={styles.statIcon} />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
            <div className={styles.statValue}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* ── Middle Row ── */}
      <div className={styles.middleRow}>

        {/* Trends Card — pure CSS chart, no Recharts */}
        <div className={styles.trendsCard}>
          <div className={styles.trendsHeader}>
            <h2 className={styles.trendsTitle}>Today's Trends</h2>
            <div className={styles.chartTabs}>
              {['Today', 'Week', 'Month'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`${styles.chartTab} ${chartPeriod === tab ? styles.chartTabActive : ''}`}
                  onClick={() => setChartPeriod(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.chartArea}>
            <div className={styles.cssChart}>
              <div className={styles.yAxis}>
                <span>30K</span>
                <span>20K</span>
                <span>10K</span>
              </div>
              <div className={styles.bars}>
                {TREND_DATA.map((entry) => (
                  <div key={entry.time} className={styles.barCol}>
                    <div
                      className={styles.bar}
                      style={{
                        height: `${(entry.value / 30000) * 100}%`,
                        background: HIGHLIGHT_TIMES.has(entry.time) ? '#E8440A' : '#3A3A3A',
                      }}
                    />
                    <span className={styles.barLabel}>{entry.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* By Business Type */}
        <div className={styles.businessCard}>
          <h2 className={styles.businessTitle}>By Business Type</h2>
          <div className={styles.businessList}>
            {BUSINESS_TYPES.map((item) => (
              <div key={item.label} className={styles.businessRow}>
                <span className={styles.businessLabel}>
                  <span className={item.dot === 'orange' ? styles.dotOrange : styles.dotGrey} />
                  {item.label}
                </span>
                <span className={styles.businessAmount}>{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Recent Clients ── */}
      <div className={styles.recentCard}>
        <h2 className={styles.recentTitle}>Recent Clients</h2>
        <div className={styles.recentRows}>
          {RECENT_CLIENTS.map((client) => (
            <div key={client.name} className={styles.recentRow}>
              <div>
                <div className={styles.clientName}>{client.name}</div>
                <div className={styles.clientUpdated}>{client.updated}</div>
              </div>
              <CategoryBadge category={client.category} />
              <span className={styles.clientRevenue}>{client.revenue}</span>
            </div>
          ))}
        </div>
        <img src={lobsterImg} alt="" className={styles.lobsterImg} />
      </div>

    </div>
  );
}

export default AdminOverview;