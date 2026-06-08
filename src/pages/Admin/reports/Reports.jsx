import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './Reports.module.css';

const MONTHLY_REVENUE = [
  { month: 'Jan', revenue: 28 },
  { month: 'Feb', revenue: 32 },
  { month: 'Mar', revenue: 29 },
  { month: 'Apr', revenue: 35 },
  { month: 'May', revenue: 38 },
  { month: 'Jun', revenue: 42 },
];

const CATEGORY_ORDERS = [
  { category: 'Hotel', orders: 1500 },
  { category: 'Pub', orders: 1200 },
  { category: 'Restaurant', orders: 2800 },
  { category: 'Cafe', orders: 900 },
];

const STATS = [
  { label: 'Total Revenue', value: '204,000,000 RWF' },
  { label: 'Orders This Month', value: '7,000' },
  { label: 'New Clients', value: '45' },
  { label: 'Avg Order Value', value: '29,140 RWF' },
];

const TOP_BUSINESSES = [
  { name: 'M Hotel', category: 'Hotel', revenue: '14,256,000 RWF', orders: 2450, growth: '+12%' },
  { name: 'Soy Resto', category: 'Restaurant', revenue: '12,890,000 RWF', orders: 2100, growth: '+8%' },
  { name: 'Sundowner', category: 'Pub', revenue: '9,450,000 RWF', orders: 1800, growth: '+15%' },
  { name: 'Urban Cafe', category: 'Cafe', revenue: '7,230,000 RWF', orders: 1450, growth: '+5%' },
];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <strong>{label}</strong>
      <span>{payload[0].name}: {payload[0].value}</span>
    </div>
  );
}

function Reports() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.pageHeading}>Reports</h1>
          <p className={styles.pageSubtext}>Revenue, orders, and business performance snapshots.</p>
        </div>
        <button type="button" className={styles.primaryBtn}>Export</button>
      </div>

      <section className={styles.statsGrid}>
        {STATS.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <span className={styles.statLabel}>{stat.label}</span>
            <strong className={styles.statValue}>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className={styles.chartsGrid}>
        <article className={styles.chartCard}>
          <h2 className={styles.cardTitle}>Monthly Revenue</h2>
          <div className={styles.chartArea}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_REVENUE} margin={{ top: 8, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="reportsRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E8440A" stopOpacity={0.42} />
                    <stop offset="95%" stopColor="#E8440A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#252525" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#888888', fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}M`} tick={{ fill: '#888888', fontSize: 11 }} />
                <Tooltip content={<ChartTooltip />} />
                <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#E8440A" strokeWidth={2} fill="url(#reportsRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className={styles.chartCard}>
          <h2 className={styles.cardTitle}>Orders by Category</h2>
          <div className={styles.chartArea}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CATEGORY_ORDERS} margin={{ top: 8, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#252525" vertical={false} />
                <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fill: '#888888', fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888888', fontSize: 11 }} />
                <Tooltip content={<ChartTooltip />} />
                <Bar dataKey="orders" name="Orders" fill="#E8440A" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className={styles.tableCard}>
        <h2 className={styles.cardTitle}>Top Performing Businesses</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Business</th>
                <th>Category</th>
                <th>Revenue</th>
                <th>Total Orders</th>
                <th>Growth</th>
              </tr>
            </thead>
            <tbody>
              {TOP_BUSINESSES.map((business) => (
                <tr key={business.name}>
                  <td className={styles.nameCell}>{business.name}</td>
                  <td>{business.category}</td>
                  <td className={styles.money}>{business.revenue}</td>
                  <td>{business.orders.toLocaleString()}</td>
                  <td className={styles.growth}>{business.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Reports;
