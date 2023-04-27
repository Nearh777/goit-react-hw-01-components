import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistic.module.css';

export const Statistic = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className={css.title}>Upload stats</h2>
      <ul className="stat-list">
        {stats.map(({ label, percentage, id }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

