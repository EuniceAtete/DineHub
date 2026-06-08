import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './Marketing.module.css';

const PERFORMANCE = [
  { month: 'Jan', reach: 42 },
  { month: 'Feb', reach: 51 },
  { month: 'Mar', reach: 48 },
  { month: 'Apr', reach: 61 },
  { month: 'May', reach: 58 },
  { month: 'Jun', reach: 72 },
];

const CAMPAIGNS = [
  { name: 'Weekend Dining Push', target: 'Restaurant customers', start: '2026-06-01', end: '2026-06-30', status: 'Active', reach: '72,400', score: 86 },
  { name: 'Hotel Breakfast Bundle', target: 'Hotels', start: '2026-05-20', end: '2026-06-20', status: 'Active', reach: '41,900', score: 74 },
  { name: 'Cafe Loyalty Credits', target: 'Cafe regulars', start: '2026-05-01', end: '2026-05-31', status: 'Completed', reach: '28,600', score: 64 },
  { name: 'Pub Match Night', target: 'Pub guests', start: '2026-06-15', end: '2026-07-15', status: 'Scheduled', reach: '19,300', score: 52 },
];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <strong>{label}</strong>
      <span>Reach: {payload[0].value}K</span>
    </div>
  );
}

function StatusBadge({ status }) {
  const className = status === 'Active' ? styles.active : status === 'Completed' ? styles.completed : styles.scheduled;
  return <span className={`${styles.statusBadge} ${className}`}>{status}</span>;
}

function Marketing() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.pageHeading}>Marketing</h1>
          <p className={styles.pageSubtext}>Campaign reach and promotional activity.</p>
        </div>
        <button type="button" className={styles.primaryBtn}>Create Campaign</button>
      </div>

      <section className={styles.chartCard}>
        <div className={styles.chartHeader}>
          <h2 className={styles.cardTitle}>Campaign Performance</h2>
          <span className={styles.chartMeta}>261K total reach</span>
        </div>
        <div className={styles.chartArea}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={PERFORMANCE} margin={{ top: 8, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="marketingReach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E8440A" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#E8440A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#888888', fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}K`} tick={{ fill: '#888888', fontSize: 11 }} />
              <Tooltip content={<ChartTooltip />} />
              <Area type="monotone" dataKey="reach" stroke="#E8440A" strokeWidth={2} fill="url(#marketingReach)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className={styles.tableCard}>
        <h2 className={styles.cardTitle}>Active Campaigns</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Campaign Name</th>
                <th>Target</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Reach</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody>
              {CAMPAIGNS.map((campaign) => (
                <tr key={campaign.name}>
                  <td className={styles.nameCell}>{campaign.name}</td>
                  <td>{campaign.target}</td>
                  <td className={styles.muted}>{campaign.start}</td>
                  <td className={styles.muted}>{campaign.end}</td>
                  <td><StatusBadge status={campaign.status} /></td>
                  <td className={styles.money}>{campaign.reach}</td>
                  <td>
                    <div className={styles.meter} aria-label={`${campaign.score}% performance`}>
                      <span className={styles[`score${campaign.score}`]} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Marketing;
