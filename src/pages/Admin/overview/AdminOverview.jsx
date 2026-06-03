import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './AdminOverview.module.css';
import lobsterImg from '../../../assets/Overview/lobster.png';

const TREND_DATA = [
  { date: 'May 16', revenue: 22000, prev: 18000 },
  { date: 'May 17', revenue: 25000, prev: 20000 },
  { date: 'May 18', revenue: 20000, prev: 22000 },
  { date: 'May 19', revenue: 32000, prev: 25000 },
  { date: 'May 20', revenue: 42000, prev: 28000 },
  { date: 'May 21', revenue: 51000, prev: 30000 },
];

const STAT_CARDS = [
  { label: 'Total Clients', value: '60', icon: <ClientsIcon />, active: true },
  { label: 'Total Revenue', value: '38,300,000', icon: <RevenueIcon /> },
  { label: 'Total Orders', value: '67,569', icon: <OrdersIcon /> },
  { label: 'Active Businesses', value: '238', icon: <BusinessIcon /> },
];

const ACTIVITIES = [
  { label: 'Revenue Milestone', time: '1 min ago', tone: 'orange', icon: <RevenueMiniIcon /> },
  { label: 'New client registration', time: '15 min ago', tone: 'purple', icon: <ClientMiniIcon /> },
  { label: 'Approval Request', time: '17 min ago', tone: 'green', icon: <ApprovalMiniIcon /> },
];

const RECENT_CLIENTS = [
  { business: 'M Hotel', category: 'Hotel', revenue: '$142,560', lastActivity: '1 min ago', tone: 'hotel' },
  { business: 'Urban Cafe', category: 'Pub', revenue: '$98,420', lastActivity: '3 mins ago', tone: 'pub' },
  { business: 'Soy Resto', category: 'Restaurant', revenue: '$67,890', lastActivity: '15 mins ago', tone: 'restaurant' },
  { business: 'Sundowner', category: 'Cafe', revenue: '$45,230', lastActivity: '1 hr ago', tone: 'cafe' },
];

function ClientsIcon() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <circle cx="12" cy="11" r="4" />
      <path d="M4 25c.7-5 4-8 8-8s7.3 3 8 8" />
      <circle cx="23" cy="10" r="3.4" />
      <path d="M20 17.5c4.5.4 7.2 3 7.8 7.5" />
    </svg>
  );
}

function RevenueIcon() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <path d="M17 4v26" />
      <path d="M25 10.5h-12a4.5 4.5 0 0 0 0 9h8a4.5 4.5 0 0 1 0 9H8" />
    </svg>
  );
}

function OrdersIcon() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <path d="M10 12h17l-1.4 17H11.4L10 12Z" />
      <path d="M14 12a5 5 0 0 1 10 0" />
      <path d="M5 6h5l3 7" />
      <path d="M6 14h3" />
      <path d="M6 20h4" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <path d="M7 29V7h13v22" />
      <path d="M20 14h7v15" />
      <path d="M11 12h5M11 18h5M11 24h5" />
      <path d="M4 29h26" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 25l11 10 11-22 11 22 11-10-5 26H15L10 25Z" />
      <circle cx="10" cy="25" r="5" />
      <circle cx="32" cy="13" r="5" />
      <circle cx="54" cy="25" r="5" />
      <path d="M16 56h32" />
    </svg>
  );
}

function RevenueMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M17 8H9.5a3 3 0 0 0 0 6H14a3 3 0 0 1 0 6H7" />
    </svg>
  );
}

function ClientMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 10h12l-1 10H7L6 10Z" />
      <path d="M9 10a3 3 0 0 1 6 0" />
    </svg>
  );
}

function ApprovalMiniIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 5v14M12 5v14M18 5v14" />
      <path d="M4 15l2 3 3-5M10 15l2 3 3-5M16 15l2 3 3-5" />
    </svg>
  );
}

function AdminOverview() {
  return (
    <div className={styles.page}>
      <section className={styles.statsRow} aria-label="Admin statistics">
        {STAT_CARDS.map((stat) => (
          <article
            key={stat.label}
            className={`${styles.statCard} ${stat.active ? styles.statCardActive : ''}`}
          >
            <div className={styles.statHeader}>
              <span className={styles.statIcon}>{stat.icon}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
            <strong className={styles.statValue}>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className={styles.middleRow}>
        <article className={styles.chartCard}>
          <h2 className={styles.chartTitle}>This week's trends</h2>
          <div className={styles.chartArea}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={TREND_DATA}
                margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#888888', fontSize: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `$${v / 1000}K`}
                  tick={{ fill: '#888888', fontSize: 10 }}
                  width={40}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#E8440A"
                  strokeWidth={2}
                  dot={{ fill: '#E8440A', r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="prev"
                  stroke="#444444"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <div className={styles.rightCol}>
          <article className={styles.topBusinessCard}>
            <span className={styles.crownIcon}>
              <CrownIcon />
            </span>
            <div className={styles.topBusinessCopy}>
              <p className={styles.topBusinessLabel}>Top Business:</p>
              <strong className={styles.topBusinessName}>M HOTEL</strong>
            </div>
          </article>

          <article className={styles.activityCard}>
            <div className={styles.activityHeader}>
              <h2 className={styles.activityTitle}>Live Activity Feed</h2>
              <button type="button">View All</button>
            </div>
            <div className={styles.activityList}>
              {ACTIVITIES.map((activity) => (
                <div key={activity.label} className={styles.activityRow}>
                  <span className={`${styles.activityDot} ${styles[activity.tone]}`}>
                    {activity.icon}
                  </span>
                  <strong className={styles.activityName}>{activity.label}</strong>
                  <time className={styles.activityTime}>{activity.time}</time>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={styles.recentCard}>
        <div className={styles.recentHeader}>
          <h2 className={styles.recentTitle}>Recent Clients</h2>
          <button type="button">View All <span>v</span></button>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>Business</span>
            <span>Category</span>
            <span>Revenue</span>
            <span>Last Activity</span>
            <span>Activities</span>
          </div>
          {RECENT_CLIENTS.map((client) => (
            <div key={client.business} className={styles.tableRow}>
              <div className={styles.businessCell}>
                <span className={styles.businessLogo}>{client.business.slice(0, 2)}</span>
                <strong>{client.business}</strong>
              </div>
              <span className={`${styles.categoryBadge} ${styles[client.tone]}`}>
                {client.category}
              </span>
              <span className={styles.revenueCell}>{client.revenue}</span>
              <time>{client.lastActivity}</time>
              <span aria-hidden="true" />
            </div>
          ))}
        </div>

        <img src={lobsterImg} alt="" className={styles.lobsterImg} />
      </section>
    </div>
  );
}

export default AdminOverview;
