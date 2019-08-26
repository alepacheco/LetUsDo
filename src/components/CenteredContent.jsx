import React from 'react';
import '../styles/components/CenteredContent.scss';

export const CenteredContent = ({ children, reverse }) => {
  return <div className={`centered-content ${reverse ? 'reverse' : ''}`}>{children}</div>;
};

export default CenteredContent;
