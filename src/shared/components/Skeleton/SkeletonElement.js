import React from 'react';
import './Skeleton.scss';
import PropTypes from 'prop-types';

const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className={classes} />;
};

SkeletonElement.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SkeletonElement;
