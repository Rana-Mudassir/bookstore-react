import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#4386bf"
    ariaLabel="three-dots-loading"
    visible={isLoading}
  />
);

Loader.propTypes = {
  isLoading: PropTypes.string.isRequired,
};

export default Loader;
