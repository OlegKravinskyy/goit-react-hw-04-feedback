import React from 'react';
import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedback }) => {
  const { handleGoodFeedback, handleNeutralFeedback, handleBadFeedback } =
    options;
  const { good, neutral, bad } = onFeedback;
  return (
    <div className={css.box}>
      <button className={css.btn} type="butt on" onClick={handleGoodFeedback}>
        {good}
      </button>
      <button className={css.btn} type="button" onClick={handleNeutralFeedback}>
        {neutral}
      </button>
      <button className={css.btn} type="button" onClick={handleBadFeedback}>
        {bad}
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.func).isRequired,
  onFeedback: PropTypes.objectOf(PropTypes.string).isRequired,
};
