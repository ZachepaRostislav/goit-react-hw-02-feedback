import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListParagraph } from './Statistics.styled';
export default function Statistics({
  state,
  feedbackKeys,
  total,
  positiveFdbk,
}) {
  return (
    <>
      <List>
        {feedbackKeys.map((key, index) => {
          return (
            <ListItem key={index}>
              {key}: {state[key]}
            </ListItem>
          );
        })}
        <ListParagraph>Total:{total}</ListParagraph>
        <ListParagraph>Positive feedback:{positiveFdbk}%</ListParagraph>
      </List>
    </>
  );
}

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number).isRequired,
  feedbackKeys: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positiveFdbk: PropTypes.number.isRequired,
};
