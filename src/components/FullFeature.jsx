import React from 'react';
import '../styles/components/FullFeature.scss';
import Icon from '../static/images/undraw_process.svg';
import { CenteredContent } from './CenteredContent';

export const FullFeature = ({ imageSide = 'left' }) => {
  return (
    <div className="full-feature">
      <CenteredContent reverse={imageSide === 'right'}>
        <div className="side-image">
          <Icon width="250" height="250" />
        </div>
        <div className="feature-text">
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
        </div>
      </CenteredContent>
    </div>
  );
};

export default FullFeature;
