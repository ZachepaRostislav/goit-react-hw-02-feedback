import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = category => {
    this.setState(prevState => ({
      [category]: prevState[category] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const feedbackKeys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFdbk = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            countFeedback={this.countFeedback}
            feedbackKeys={feedbackKeys}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              state={this.state}
              feedbackKeys={feedbackKeys}
              total={total}
              positiveFdbk={positiveFdbk}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </>
    );
  }
}
