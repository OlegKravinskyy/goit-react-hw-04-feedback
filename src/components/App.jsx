import { useState } from 'react';
import Box from './Box/Box';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(state => state + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(state => state + 1);
  };

  const handleBadFeedback = () => {
    setBad(state => state + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good === 0 ? 0 : Math.round((good * 100) / countTotalFeedback());
  };

  const total = countTotalFeedback();

  return (
    <Box>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={{
            handleGoodFeedback: handleGoodFeedback,
            handleNeutralFeedback: handleNeutralFeedback,
            handleBadFeedback: handleBadFeedback,
          }}
          onFeedback={{
            good: 'Good',
            neutral: 'Neutral',
            bad: 'Bad',
          }}
        />
      </Section>

      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Box>
  );
};

export default App;
