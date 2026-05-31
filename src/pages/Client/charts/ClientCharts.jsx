import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './ClientCharts.module.css';

const CHART_CARDS = [
  {
    pill: 'Orders',
    data: [
      { name: 'Physical', value: 55, color: '#E8440A' },
      { name: 'Online', value: 30, color: '#4A3020' },
      { name: 'Other', value: 15, color: '#2A2A2A' },
    ],
    legend: [
      { label: 'Physical', color: '#E8440A', muted: false },
      { label: 'Online', color: '#4A3020', muted: true },
    ],
  },
  {
    pill: 'Sales',
    data: [
      { name: 'Revenue', value: 35, color: '#D4A574' },
      { name: 'Investing', value: 50, color: '#4A3020' },
      { name: 'Other', value: 15, color: '#2A2A2A' },
    ],
    legend: [
      { label: 'Revenue', color: '#D4A574', muted: false },
      { label: 'Investing', color: '#4A3020', muted: true },
    ],
  },
  {
    pill: 'Customers',
    data: [
      { name: 'Local People', value: 45, color: '#E8A87C' },
      { name: 'Tourists', value: 25, color: '#F5F5F5' },
      { name: 'Other', value: 30, color: '#3A3A3A' },
    ],
    legend: [
      { label: 'Local People', color: '#E8A87C', muted: false, bold: true },
      { label: 'Tourists', color: '#F5F5F5', muted: false, bold: true },
    ],
  },
  {
    pill: 'Menu Items',
    data: [
      { name: 'Main Courses', value: 50, color: '#D4A574' },
      { name: 'Desserts', value: 20, color: '#E8440A' },
      { name: 'Other', value: 30, color: '#4A3020' },
    ],
    legend: [
      { label: 'Main Courses', color: '#D4A574', muted: false, bold: true },
      { label: 'Desserts', color: '#E8440A', muted: true },
    ],
  },
];

function DonutChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={42}
          outerRadius={65}
          paddingAngle={2}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

function ClientCharts() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Tables</h1>

      <div className={styles.grid}>
        {CHART_CARDS.map((card) => (
          <div key={card.pill} className={styles.chartCardWrap}>
            <span className={styles.pillLabel}>{card.pill}</span>
            <div className={styles.chartCard}>
              <div className={styles.pieWrap}>
                <DonutChart data={card.data} />
              </div>
              <div className={styles.legend}>
                {card.legend.map((item) => (
                  <div key={item.label} className={styles.legendItem}>
                    <span
                      className={styles.legendDot}
                      style={{ '--dot-color': item.color }}
                    />
                    <span
                      className={
                        item.bold
                          ? styles.legendLabelBold
                          : item.muted
                            ? styles.legendLabelMuted
                            : styles.legendLabel
                      }
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
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

export default ClientCharts;
