import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './Notification.styled';

export default function Notification({ message }) {
  return (
    <>
      <Paragraph>{message}</Paragraph>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
