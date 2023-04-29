import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListBtn } from './FeedbackOptions.styled';
export default function FeedbackOptions({ countFeedback, feedbackKeys }) {
  return (
    <>
      <List>
        {feedbackKeys.map((key, index) => {
          return (
            <ListItem key={index}>
              <ListBtn type="button" onClick={() => countFeedback(key)}>
                {key}
              </ListBtn>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

FeedbackOptions.propTypes = {
  coutFeedback: PropTypes.func,
  feedbackKeys: PropTypes.array.isRequired,
};
