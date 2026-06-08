import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import styles from './ClientOverview.module.css';

// Import image assets
import lobsterImg from '../../../assets/Overview/lobster.png';

const TREND_DATA = [
  { date: 'May 16', revenue: 1200, prev: 950  },
  { date: 'May 17', revenue: 2800, prev: 1150 },
  { date: 'May 18', revenue: 1500, prev: 1050 },
  { date: 'May 19', revenue: 3400, prev: 1300 },
  { date: 'May 20', revenue: 4100, prev: 1900 },
  { date: 'May 21', revenue: 5300, prev: 2100 },
];

function CustomersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function RevenueIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <path d="M9.5 10.5h5a2 2 0 0 1 0 4h-5a2 2 0 0 0 0 4h5" />
    </svg>
  );
}

function OrdersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#E8440A' }}>
      <path d="M2 4l3 10h14l3-10-5 5-3-7-3 7-5-5zm1 12h18v3H3z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2M15 8V6M19 6h-2M13 6h-2M12 16l-3-3 7-7 3 3-7 7z" />
      <path d="M8 15v4h4" />
    </svg>
  );
}

function DollarMiniIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e08319" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function PersonMiniIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e269df" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ApprovalMiniIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#49c147" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 5v14M19 5v14" />
      <path d="M3 14l2 2 3-4M10 14l2 2 3-4" />
    </svg>
  );
}

function ThreeDotsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="1.5" fill="#666666" />
      <circle cx="12" cy="12" r="1.5" fill="#666666" />
      <circle cx="12" cy="19" r="1.5" fill="#666666" />
    </svg>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipDate}>{label}</p>
        <p className={styles.tooltipRevenue}>
          <span className={styles.tooltipDot}></span>
          Revenue ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const RECENT_ORDERS = [
  { id: '#ORD-9842', category: 'Hotel', amount: 142.50, lastActivity: '1 min ago', status: 'Completed' },
  { id: '#ORD-9843', category: 'Pub', amount: 98.40, lastActivity: '3 mins ago', status: 'In Progress' },
  { id: '#ORD-9844', category: 'Restaurant', amount: 67.80, lastActivity: '15 mins ago', status: 'Completed' },
  { id: '#ORD-9845', category: 'Cafe', amount: 45.20, lastActivity: '1 hr ago', status: 'Pending' },
];

function ClientOverview() {
  return (
    <div className={styles.page}>
      {/* ROW 1: Stat Cards */}
      <section className={styles.statsRow} aria-label="Client statistics">
        <article className={`${styles.statCard} ${styles.statCardActive}`}>
          <div className={styles.statHeader}>
            <CustomersIcon />
            <span className={styles.statLabel}>Total Customers</span>
          </div>
          <strong className={styles.statValue}>1,420</strong>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statHeader}>
            <RevenueIcon />
            <span className={styles.statLabel}>Total Revenue</span>
          </div>
          <strong className={styles.statValue}>$185,400</strong>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statHeader}>
            <OrdersIcon />
            <span className={styles.statLabel}>Total Orders</span>
          </div>
          <strong className={styles.statValue}>4,625</strong>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statHeader}>
            <MenuIcon />
            <span className={styles.statLabel}>Active Menus</span>
          </div>
          <strong className={styles.statValue}>12</strong>
        </article>
      </section>

      {/* ROW 2: Chart + Right Column */}
      <section className={styles.middleRow}>
        {/* Left Column: This Week's Trends */}
        <article className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h2 className={styles.chartTitle}>This week's trends</h2>
            <div className={styles.chartLegend}>
              <span className={styles.legendItem}>
                <span className={styles.legendLineSolid} />
                This Week
              </span>
              <span className={styles.legendItem}>
                <span className={styles.legendLineDashed} />
                Last Week
              </span>
            </div>
          </div>

          <div className={styles.chartArea}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={TREND_DATA}
                margin={{ top: 4, right: 8, left: 8, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E8440A" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#E8440A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#888888', fontSize: 10, fontFamily: 'Inter' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `$${v}`}
                  tick={{ fill: '#888888', fontSize: 10 }}
                  width={40}
                  tickCount={6}
                  domain={[0, 6000]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="none"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#E8440A"
                  strokeWidth={2}
                  dot={{ fill: '#E8440A', stroke: '#E8440A', strokeWidth: 1, r: 4 }}
                  activeDot={{ r: 6, fill: '#E8440A' }}
                />
                <Line
                  type="monotone"
                  dataKey="prev"
                  stroke="#555"
                  strokeWidth={1.5}
                  strokeDasharray="5 5"
                  dot={{ fill: '#555', stroke: '#555', strokeWidth: 1, r: 3 }}
                  activeDot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </article>

        {/* Right Column: stacked cards */}
        <div className={styles.rightCol}>
          <article className={styles.topBusinessCard}>
            <CrownIcon />
            <div className={styles.topBusinessCopy}>
              <p className={styles.topBusinessLabel}>Best Employer:</p>
              <strong className={styles.topBusinessName}>M HOTEL</strong>
            </div>
            <div className={styles.sparkleWrapper}>
              <SparkleIcon />
            </div>
          </article>

          <article className={styles.activityCard}>
            <div className={styles.activityHeader}>
              <h2 className={styles.activityTitle}>Live Activity Feed</h2>
              <button type="button" className={styles.viewAllBtn}>View All</button>
            </div>
            <div className={styles.activityList}>
              <div className={styles.activityRow}>
                <span className={`${styles.activityDot} ${styles.orangeDot}`}>
                  <DollarMiniIcon />
                </span>
                <span className={styles.activityName}>Revenue Milestone</span>
                <time className={styles.activityTime}>1 min ago</time>
              </div>

              <div className={styles.activityRow}>
                <span className={`${styles.activityDot} ${styles.purpleDot}`}>
                  <PersonMiniIcon />
                </span>
                <span className={styles.activityName}>New customer registration</span>
                <time className={styles.activityTime}>15 min ago</time>
              </div>

              <div className={styles.activityRow}>
                <span className={`${styles.activityDot} ${styles.greenDot}`}>
                  <ApprovalMiniIcon />
                </span>
                <span className={styles.activityName}>Approval Request</span>
                <time className={styles.activityTime}>17 min ago</time>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ROW 3: Recent Orders */}
      <section className={styles.recentCard}>
        <div className={styles.recentHeader}>
          <h2 className={styles.recentTitle}>Recent Orders</h2>
          <button type="button" className={styles.recentViewAllBtn}>
            View All <span className={styles.chevronSpan}>▾</span>
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <span>Order ID</span>
              <span>Category</span>
              <span>Amount</span>
              <span>Last Activity</span>
              <span>Status</span>
            </div>

            <div className={styles.tableBody}>
              {RECENT_ORDERS.map((order) => (
                <div key={order.id} className={styles.tableRow}>
                  <div className={styles.businessCell}>
                    <strong>{order.id}</strong>
                  </div>
                  <span className={`${styles.categoryBadge} ${
                    order.category === 'Hotel' ? styles.badgeHotel :
                    order.category === 'Pub' ? styles.badgePub :
                    order.category === 'Restaurant' ? styles.badgeRestaurant :
                    styles.badgeCafe
                  }`}>
                    {order.category}
                  </span>
                  <span className={styles.revenueCell}>${order.amount.toFixed(2)}</span>
                  <time className={styles.timeCell}>{order.lastActivity}</time>
                  <span className={`${styles.statusBadge} ${
                    order.status === 'Completed' ? styles.statusCompleted :
                    order.status === 'In Progress' ? styles.statusProgress :
                    styles.statusPending
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <img src={lobsterImg} alt="Lobster" className={styles.lobsterImg} />
      </section>
    </div>
  );
}

export default ClientOverview;