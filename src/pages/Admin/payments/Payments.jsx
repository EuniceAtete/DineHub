import { useMemo, useState } from 'react';
import styles from './Payments.module.css';

const PAYMENTS = [
  { id: 'TXN-84510', business: 'M Hotel', amount: '1,240,000 RWF', method: 'card', date: '2026-06-08', status: 'Paid' },
  { id: 'TXN-84509', business: 'Soy Resto', amount: '840,500 RWF', method: 'mobile', date: '2026-06-08', status: 'Paid' },
  { id: 'TXN-84508', business: 'Urban Cafe', amount: '310,000 RWF', method: 'cash', date: '2026-06-07', status: 'Pending' },
  { id: 'TXN-84507', business: 'Sundowner', amount: '590,400 RWF', method: 'card', date: '2026-06-07', status: 'Failed' },
  { id: 'TXN-84506', business: 'Choose Kigali', amount: '455,000 RWF', method: 'mobile', date: '2026-06-06', status: 'Paid' },
];

const METHODS = ['All', 'card', 'cash', 'mobile'];
const STATUSES = ['All', 'Paid', 'Pending', 'Failed'];

function StatusBadge({ status }) {
  const className = status === 'Paid' ? styles.paid : status === 'Failed' ? styles.failed : styles.pending;
  return <span className={`${styles.statusBadge} ${className}`}>{status}</span>;
}

function MethodBadge({ method }) {
  return <span className={`${styles.methodBadge} ${styles[method]}`}>{method}</span>;
}

function Payments() {
  const [methodFilter, setMethodFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredPayments = useMemo(() => {
    return PAYMENTS.filter((payment) => {
      const matchesMethod = methodFilter === 'All' || payment.method === methodFilter;
      const matchesStatus = statusFilter === 'All' || payment.status === statusFilter;
      return matchesMethod && matchesStatus;
    });
  }, [methodFilter, statusFilter]);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.pageHeading}>Payments</h1>
          <p className={styles.pageSubtext}>Monitor transaction settlements and collection methods.</p>
        </div>
      </div>

      <section className={styles.summaryCard}>
        <span className={styles.summaryLabel}>Total Revenue</span>
        <strong className={styles.summaryValue}>38,300,000 RWF</strong>
        <span className={styles.summaryMeta}>+12.4% from last month</span>
      </section>

      <section className={styles.controlsCard}>
        <select className={styles.select} value={methodFilter} onChange={(event) => setMethodFilter(event.target.value)}>
          {METHODS.map((method) => <option key={method} value={method}>{method}</option>)}
        </select>
        <select className={styles.select} value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          {STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}
        </select>
      </section>

      <section className={styles.tableCard}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Business</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id}>
                  <td className={styles.idCell}>{payment.id}</td>
                  <td>{payment.business}</td>
                  <td className={styles.money}>{payment.amount}</td>
                  <td><MethodBadge method={payment.method} /></td>
                  <td className={styles.muted}>{payment.date}</td>
                  <td><StatusBadge status={payment.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Payments;
