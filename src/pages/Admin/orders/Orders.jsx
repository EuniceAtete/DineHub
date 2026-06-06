import { useMemo, useState } from 'react';
import styles from './Orders.module.css';

const ORDERS = [
  { id: 'ORD-9042', business: 'M Hotel', customer: 'Grace Uwera', items: 5, amount: '62,400 RWF', status: 'Completed', time: '09:45' },
  { id: 'ORD-9041', business: 'Soy Resto', customer: 'Patrick Kamanzi', items: 3, amount: '28,000 RWF', status: 'Preparing', time: '09:31' },
  { id: 'ORD-9040', business: 'Urban Cafe', customer: 'Aline Mutabazi', items: 2, amount: '15,500 RWF', status: 'Pending', time: '09:18' },
  { id: 'ORD-9039', business: 'Sundowner', customer: 'Claude Niyonzima', items: 8, amount: '84,900 RWF', status: 'Completed', time: '08:56' },
  { id: 'ORD-9038', business: 'Choose Kigali', customer: 'Diane Nyirahabineza', items: 4, amount: '39,200 RWF', status: 'Cancelled', time: '08:20' },
  { id: 'ORD-9037', business: 'M Hotel', customer: 'Kevin Ntwari', items: 6, amount: '72,000 RWF', status: 'Completed', time: '07:55' },
];

const STATUSES = ['All', 'Pending', 'Preparing', 'Completed', 'Cancelled'];
const BUSINESSES = ['All', 'M Hotel', 'Soy Resto', 'Urban Cafe', 'Sundowner', 'Choose Kigali'];

function StatusBadge({ status }) {
  const className = {
    Pending: styles.pending,
    Preparing: styles.preparing,
    Completed: styles.completed,
    Cancelled: styles.cancelled,
  }[status];

  return <span className={`${styles.statusBadge} ${className}`}>{status}</span>;
}

function Orders() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [businessFilter, setBusinessFilter] = useState('All');
  const [dateFrom, setDateFrom] = useState('2026-06-01');
  const [dateTo, setDateTo] = useState('2026-06-08');

  const filteredOrders = useMemo(() => {
    return ORDERS.filter((order) => {
      const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
      const matchesBusiness = businessFilter === 'All' || order.business === businessFilter;
      return matchesStatus && matchesBusiness;
    });
  }, [statusFilter, businessFilter]);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.pageHeading}>Orders</h1>
          <p className={styles.pageSubtext}>Track orders across all connected businesses.</p>
        </div>
      </div>

      <section className={styles.controlsCard}>
        <select className={styles.select} value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          {STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}
        </select>
        <select className={styles.select} value={businessFilter} onChange={(event) => setBusinessFilter(event.target.value)}>
          {BUSINESSES.map((business) => <option key={business} value={business}>{business}</option>)}
        </select>
        <div className={styles.dateRange}>
          <input type="date" className={styles.dateInput} value={dateFrom} onChange={(event) => setDateFrom(event.target.value)} />
          <span>to</span>
          <input type="date" className={styles.dateInput} value={dateTo} onChange={(event) => setDateTo(event.target.value)} />
        </div>
      </section>

      <section className={styles.tableCard}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Business</th>
                <th>Customer</th>
                <th>Items Count</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className={styles.idCell}>{order.id}</td>
                  <td className={styles.businessCell}>{order.business}</td>
                  <td>{order.customer}</td>
                  <td>{order.items}</td>
                  <td className={styles.money}>{order.amount}</td>
                  <td><StatusBadge status={order.status} /></td>
                  <td className={styles.muted}>{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Orders;
