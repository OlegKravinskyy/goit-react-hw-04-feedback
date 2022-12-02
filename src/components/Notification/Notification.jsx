import React from 'react';
import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

const Notification = ({ message }) => (
  <span className={css.text}>{message}</span>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
