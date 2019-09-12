import React from 'react';
import 'src/styles/components/CenteredContent.scss';

type CenteredContentProps = {
  reverse?: boolean;
};

export const CenteredContent: React.FC<CenteredContentProps> = ({ children, reverse }) => {
  return <div className={`centered-content ${reverse ? 'reverse' : ''}`}>{children}</div>;
};

export default CenteredContent;
