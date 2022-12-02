import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.box}>
      <li className={css.item_statistics}>Neutral: {neutral}</li>
      <li className={css.item_statistics}>Good: {good}</li>
      <li className={css.item_statistics}>Bad: {bad}</li>
      <li className={css.item_statistics}>Total: {total}</li>
      <li className={css.item_statistics}>
        Positive feedback: {positivePercentage} %
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
