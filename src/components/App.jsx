import React from 'react';
import Box from './Box/Box';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return good === 0
      ? 0
      : Math.round((good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Box>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{
              handleGoodFeedback: this.handleGoodFeedback,
              handleNeutralFeedback: this.handleNeutralFeedback,
              handleBadFeedback: this.handleBadFeedback,
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
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Box>
    );
  }
}

export default App;
