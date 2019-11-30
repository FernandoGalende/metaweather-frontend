import React from 'react';
import PropTypes from 'prop-types';

const AddIcon = props => (
  <svg height="16px" version="1.1" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg">
    <title>icon/add</title>
    <desc>Created with Sketch Beta.</desc>
    <g fill="none" fillRule="evenodd" id="icon/add" stroke="none" strokeWidth="1">
      <path
        d="M8,4 C8.27614237,4 8.5,4.22385763 8.5,4.5 L8.5,4.5 L8.5,7.5 L11.5,7.5 C11.7454599,7.5 11.9496084,7.67687516 11.9919443,7.91012437 L12,8 C12,8.27614237 11.7761424,8.5 11.5,8.5 L11.5,8.5 L8.5,8.5 L8.5,11.5 C8.5,11.7454599 8.32312484,11.9496084 8.08987563,11.9919443 L8,12 C7.72385763,12 7.5,11.7761424 7.5,11.5 L7.5,11.5 L7.5,8.5 L4.5,8.5 C4.25454011,8.5 4.05039163,8.32312484 4.00805567,8.08987563 L4,8 C4,7.72385763 4.22385763,7.5 4.5,7.5 L4.5,7.5 L7.5,7.5 L7.5,4.5 C7.5,4.25454011 7.67687516,4.05039163 7.91012437,4.00805567 Z"
        fill={props.fill}
        id="icon"
      />
    </g>
  </svg>
);

AddIcon.defaultProps = {
  fill: '#b8b8b8',
};

AddIcon.propTypes = {
  fill: PropTypes.string,
};

export default AddIcon;
