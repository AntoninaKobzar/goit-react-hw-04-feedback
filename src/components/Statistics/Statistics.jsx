import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Notification from '../Notification';



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {


  return (
    <div>
      {!!total ? (
        <ul>
          <li className={css.item}>
            <p>
              Good: <span className={css.value}>{good}</span>
            </p>
          </li>
          <li className={css.item}>
            <p>
              Neutral: <span className={css.value}>{neutral}</span>
            </p>
          </li>
          <li className={css.item}>
            <p>
              Bad: <span className={css.value}>{bad}</span>
            </p>
          </li>
          <li className={css.item}>
            <p>
              Total: <span className={css.value}>{total}</span>
            </p>
          </li>
          <li className={css.item}>
            <p>
              Positive feedback:{' '}
              <span className={css.value}>{positivePercentage}%</span>
            </p>
          </li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;


