import { useState } from 'react';
import styles from './ClientOverview.module.css';
import customersIcon from '../../../assets/Overview/clients.png';
import revenueIcon from '../../../assets/Overview/revenue.png';
import ordersIcon from '../../../assets/Overview/orders.png';
import shrimpsImg from '../../../assets/Overview/shrimps.png';

const STATS = [
  { label: 'Total Customer', value: '143', icon: customersIcon, active: true },
  { label: 'Total Revenue',  value: '5,041,800', icon: revenueIcon },
  { label: 'Total Orders',   value: '2,347', icon: ordersIcon },
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

const BY_SOLD_FOOD = [
  { label: 'Burgers',  amount: '3,041,000', dot: 'orange' },
  { label: 'Icecream', amount: '1,800,800', dot: 'grey'   },
  { label: 'Drinks',   amount: '200,000',   dot: 'grey'   },
];

const RECENT_ORDERS = [
  { name: 'Vanilla + Chocolate Icecream', updated: 'Updated 1 sec ago',   category: 'DESSERT', revenue: '14,000 RWF' },
  { name: 'Cheese Burger and Fries',      updated: 'Updated 30 secs ago', category: 'MC',      revenue: '20,000 RWF' },
  { name: 'Apple Juice',                  updated: 'Updated 2 mins ago',  category: 'Drink',   revenue: '3,000 RWF'  },
];

function CategoryBadge({ category }) {
  const colorMap = {
    DESSERT: { background: '#1a4a4a', color: '#4ecdc4' },
    MC:      { background: '#1a3a1a', color: '#4ade80' },
    Drink:   { background: '#1a1a3a', color: '#818cf8' },
  };
  const style = colorMap[category] || { background: '#252525', color: '#ffffff' };
  return (
    <span
      className={styles.badge}
      style={{ background: style.background, color: style.color }}
    >
      {category}
    </span>
  );
}

function ClientOverview() {
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

        {/* Trends Card */}
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

        {/* By Sold Food */}
        <div className={styles.businessCard}>
          <h2 className={styles.businessTitle}>By Sold Food</h2>
          <div className={styles.businessList}>
            {BY_SOLD_FOOD.map((item) => (
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

      {/* ── Recent Orders ── */}
      <div className={styles.recentCard}>
        <h2 className={styles.recentTitle}>Recent Orders</h2>
        <div className={styles.recentRows}>
          {RECENT_ORDERS.map((order) => (
            <div key={order.name} className={styles.recentRow}>
              <div>
                <div className={styles.clientName}>{order.name}</div>
                <div className={styles.clientUpdated}>{order.updated}</div>
              </div>
              <CategoryBadge category={order.category} />
              <span className={styles.clientRevenue}>{order.revenue}</span>
            </div>
          ))}
        </div>
        <img src={shrimpsImg} alt="" className={styles.decorImg} />
      </div>

    </div>
  );
}

export default ClientOverview;