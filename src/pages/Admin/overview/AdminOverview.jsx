import { useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import styles from './AdminOverview.module.css';
import trendCardsBg from '../../../assets/Admin/Trend Cards.png';
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
  { time: '8am', value: 20000 },
  { time: '9am', value: 11000 },
  { time: '10am', value: 30000 },
  { time: '11am', value: 25000 },
  { time: '12am', value: 27000 },
  { time: '1pm', value: 29000 },
  { time: '2pm', value: 10000 },
  { time: '3pm', value: 13000 },
];

const HIGHLIGHT_TIMES = new Set(['8am', '10am', '1pm']);

const BUSINESS_TYPES = [
  { label: 'Restaurants', amount: '24,000,000 RWF', dot: 'orange' },
  { label: 'Hotels', amount: '10,300,000 RWF', dot: 'grey' },
  { label: 'Pubs', amount: '4,000,000 RWF', dot: 'grey' },
];

const RECENT_CLIENTS = [
  { name: 'Soy Restaurant', updated: 'Updated 1 day ago', category: 'RESTO', revenue: '24,000,000 RWF' },
  { name: 'M Hotel', updated: 'Updated 2 days ago', category: 'HOTEL', revenue: '10,300,000 RWF' },
  { name: 'Sundowner', updated: 'Updated 4 days ago', category: 'PUB', revenue: '4,000,000 RWF' },
];

function CategoryBadge({ category }) {
  if (category === 'RESTO') {
    return <span className={styles.badgeResto}>{category}</span>;
  }
  return <span className={styles.badgePill}>{category}</span>;
}

function AdminOverview() {
  const [chartPeriod, setChartPeriod] = useState('Today');

  return (
    <div className={styles.page}>
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

      <div className={styles.middleRow}>
        <div
          className={styles.trendsCard}
          style={{ backgroundImage: `url(${trendCardsBg})` }}
        >
          <div className={styles.trendsHeader}>
            <h2 className={styles.trendsTitle}>Today&apos;s Trends</h2>
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
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TREND_DATA} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#888888', fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  ticks={[10000, 20000, 30000]}
                  tickFormatter={(v) => `${v / 1000}K`}
                  tick={{ fill: '#888888', fontSize: 11 }}
                  width={36}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={32}>
                  {TREND_DATA.map((entry) => (
                    <Cell
                      key={entry.time}
                      fill={HIGHLIGHT_TIMES.has(entry.time) ? '#E8440A' : '#3A3A3A'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

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
