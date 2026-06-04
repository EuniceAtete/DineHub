import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import styles from './AdminOverview.module.css';

// Import image assets
import lobsterImg from '../../../assets/Overview/lobster.png';
import mhotelImg from '../../../assets/Overview/mhotel.png';
import urbancafeImg from '../../../assets/Overview/urbancafe.png';
import soyrestoImg from '../../../assets/Overview/soyresto.png';
import sundownerImg from '../../../assets/Overview/sundowner.png';

const TREND_DATA = [
  { date: 'May 16', revenue: 10000, prev: 9000  },
  { date: 'May 17', revenue: 25000, prev: 11000 },
  { date: 'May 18', revenue: 12000, prev: 10000 },
  { date: 'May 19', revenue: 32000, prev: 14000 },
  { date: 'May 20', revenue: 38000, prev: 18000 },
  { date: 'May 21', revenue: 51000, prev: 22000 },
];

function ClientsIcon() {
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

function BusinessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="9" y2="16" />
      <line x1="15" y1="22" x2="15" y2="16" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <path d="M8 6h2v2H8zm6 0h2v2h-2zm-6 5h2v2H8zm6 0h2v2h-2z" />
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

function AdminOverview() {
  return (
    <div className={styles.page}>
      {/* ROW 1: Stat Cards */}
      <section className={styles.statsRow} aria-label="Admin statistics">
        <article className={`${styles.statCard} ${styles.statCardActive}`}>
          <div className={styles.statHeader}>
            <ClientsIcon />
            <span className={styles.statLabel}>Total Clients</span>
          </div>
          <strong className={styles.statValue}>60</strong>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statHeader}>
            <RevenueIcon />
            <span className={styles.statLabel}>Total Revenue</span>
          </div>
          <strong className={styles.statValue}>38,300,000</strong>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statHeader}>
            <OrdersIcon />
            <span className={styles.statLabel}>Total Orders</span>
          </div>
          <strong className={styles.statValue}>67,569</strong>
        </article>

        <article className={styles.statCard}>
          <div className={styles.statHeader}>
            <BusinessIcon />
            <span className={styles.statLabel}>Active Businesses</span>
          </div>
          <strong className={styles.statValue}>238</strong>
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
                  tickFormatter={(v) => `$${v / 1000}K`}
                  tick={{ fill: '#888888', fontSize: 10 }}
                  width={48}
                  tickCount={6}
                  domain={[0, 55000]}
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
              <p className={styles.topBusinessLabel}>Top Business:</p>
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
                <span className={styles.activityName}>New client registration</span>
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

      {/* ROW 3: Recent Clients */}
      <section className={styles.recentCard}>
        <div className={styles.recentHeader}>
          <h2 className={styles.recentTitle}>Recent Clients</h2>
          <button type="button" className={styles.recentViewAllBtn}>
            View All <span className={styles.chevronSpan}>▾</span>
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <span>Business</span>
              <span>Category</span>
              <span>Revenue</span>
              <span>Last Activity</span>
              <span>Activities</span>
            </div>

            <div className={styles.tableBody}>
              <div className={styles.tableRow}>
                <div className={styles.businessCell}>
                  <img src={mhotelImg} alt="M Hotel" className={styles.businessLogo} />
                  <strong>M Hotel</strong>
                </div>
                <span className={`${styles.categoryBadge} ${styles.badgeHotel}`}>Hotel</span>
                <span className={styles.revenueCell}>$142,560</span>
                <time className={styles.timeCell}>1 min ago</time>
                <div className={styles.actionCell}>
                  <ThreeDotsIcon />
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.businessCell}>
                  <img src={urbancafeImg} alt="Urban Cafe" className={styles.businessLogo} />
                  <strong>Urban Cafe</strong>
                </div>
                <span className={`${styles.categoryBadge} ${styles.badgePub}`}>Pub</span>
                <span className={styles.revenueCell}>$98,420</span>
                <time className={styles.timeCell}>3 mins ago</time>
                <div className={styles.actionCell}>
                  <ThreeDotsIcon />
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.businessCell}>
                  <img src={soyrestoImg} alt="Soy Resto" className={styles.businessLogo} />
                  <strong>Soy Resto</strong>
                </div>
                <span className={`${styles.categoryBadge} ${styles.badgeRestaurant}`}>Restaurant</span>
                <span className={styles.revenueCell}>$67,890</span>
                <time className={styles.timeCell}>15 mins ago</time>
                <div className={styles.actionCell}>
                  <ThreeDotsIcon />
                </div>
              </div>

              <div className={styles.tableRow}>
                <div className={styles.businessCell}>
                  <img src={sundownerImg} alt="Sundowner" className={styles.businessLogo} />
                  <strong>Sundowner</strong>
                </div>
                <span className={`${styles.categoryBadge} ${styles.badgeCafe}`}>Cafe</span>
                <span className={styles.revenueCell}>$45,230</span>
                <time className={styles.timeCell}>1 hr ago</time>
                <div className={styles.actionCell}>
                  <ThreeDotsIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={lobsterImg} alt="Lobster" className={styles.lobsterImg} />
      </section>
    </div>
  );
}

export default AdminOverview;
