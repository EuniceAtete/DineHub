import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import styles from './ClientOverview.module.css';

const STATS = [
  { label: 'Total Customer', value: '143', active: true },
  { label: 'Total Revenue', value: '5,041,800' },
  { label: 'Total Orders', value: '2,347' },
];

const CHART_DATA = [
  { time: '8am', value: 12000, active: false },
  { time: '9am', value: 18000, active: false },
  { time: '10am', value: 22000, active: true },
  { time: '11am', value: 28000, active: true },
  { time: '12pm', value: 30000, active: true },
  { time: '1pm', value: 25000, active: false },
  { time: '2pm', value: 20000, active: false },
  { time: '3pm', value: 15000, active: false },
];

const SOLD_FOOD = [
  { label: 'Burgers', amount: '3,041,000', dot: 'orange' },
  { label: 'Icecream', amount: '1,800,800', dot: 'grey' },
  { label: 'Drinks', amount: '200,000', dot: 'grey' },
];

const RECENT_ORDERS = [
  { name: 'Vanilla + Chocolate Icecream', updated: 'Updated 1 sec ago', category: 'DESSERT', price: '14,000 RWF' },
  { name: 'Cheese Burger and Fries', updated: 'Updated 30 secs ago', category: 'MC', price: '20,000 RWF' },
  { name: 'Apple Juice', updated: 'Updated 2 mins ago', category: 'Drink', price: '3,000 RWF' },
];

function StatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.statIcon}>
      <path d="M3 3v18h18" />
      <path d="M7 16l4-8 4 5 5-9" />
    </svg>
  );
}

function CategoryBadge({ category }) {
  if (category === 'DESSERT') return <span className={styles.badgeDessert}>{category}</span>;
  if (category === 'MC') return <span className={styles.badgeMc}>{category}</span>;
  return <span className={styles.badgeDrink}>{category}</span>;
}

function ClientOverview() {
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
              <StatIcon />
              <span>{stat.label}</span>
            </div>
            <div className={styles.statValue}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className={styles.chartsRow}>
        <div className={styles.chartPanel}>
          <div className={styles.chartHeader}>
            <h2 className={styles.sectionTitle}>Today&apos;s Trends</h2>
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
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#252525" vertical={false} />
                <XAxis
                  dataKey="time"
                  tick={{ fill: '#888888', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#888888', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  ticks={[0, 10000, 20000, 30000]}
                  tickFormatter={(v) => (v === 0 ? '' : `${v / 1000}K`)}
                />
                <Tooltip
                  contentStyle={{
                    background: '#252525',
                    border: '1px solid #333',
                    borderRadius: 8,
                    color: '#fff',
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={40}>
                  {CHART_DATA.map((entry) => (
                    <Cell key={entry.time} fill={entry.active ? '#E8440A' : '#2A2A2A'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.foodPanel}>
          <h2 className={styles.sectionTitle}>By Sold Food</h2>
          <div className={styles.foodList}>
            {SOLD_FOOD.map((item) => (
              <div key={item.label} className={styles.foodRow}>
                <span className={styles.foodLabel}>
                  <span className={item.dot === 'orange' ? styles.dotOrange : styles.dotGrey} />
                  {item.label}
                </span>
                <span className={styles.foodAmount}>{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.recentCard}>
        <h2 className={styles.recentTitle}>Recent Orders</h2>
        <div className={styles.orderRows}>
          {RECENT_ORDERS.map((order) => (
            <div key={order.name} className={styles.orderRow}>
              <div className={styles.orderInfo}>
                <h4>{order.name}</h4>
                <span className={styles.orderUpdated}>{order.updated}</span>
              </div>
              <CategoryBadge category={order.category} />
              <span className={styles.orderPrice}>{order.price}</span>
            </div>
          ))}
        </div>
        {/* SHRIMPS IMAGE PLACEHOLDER */}
        <div className={styles.shrimpsPlaceholder} />
      </div>
    </div>
  );
}

export default ClientOverview;
