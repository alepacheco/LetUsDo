import React from 'react';
import '../styles/components/FullFeature.scss';
import { CenteredContent } from './CenteredContent';

export const FullFeature = ({ Image, imageSide = 'left' }) => {
  return (
    <div className="full-feature">
      <CenteredContent reverse={imageSide === 'right'}>
        <div className="side-image">
          <Image width="250" height="250" />
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
