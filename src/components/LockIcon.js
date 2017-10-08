import React from 'react';

import './LockIcon.css';

const LockIcon = (props) => {
  if (props.lockStatus === '0') {
    return (
      <svg className="lock-icon unlocked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
        <path d="M3 0c-1.1 0-2 .9-2 2h1c0-.56.44-1 1-1s1 .44 1 1v2h-4v4h6v-4h-1v-2c0-1.1-.9-2-2-2z" transform="translate(1)" />
      </svg>
    );
  } else if (props.lockStatus === '1') {
    return (
      <svg className="lock-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
        <path d="M3 0c-1.1 0-2 .9-2 2v1h-1v4h6v-4h-1v-1c0-1.1-.9-2-2-2zm0 1c.56 0 1 .44 1 1v1h-2v-1c0-.56.44-1 1-1z" transform="translate(1)" />
      </svg>
    );
  } else {
    return undefined;
  }
}

export default LockIcon;