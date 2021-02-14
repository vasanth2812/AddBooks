import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const Error = ({ title, color }) => {
  return <Alert color={color}>{title}</Alert>;
};

Error.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Error;
