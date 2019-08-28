import React from 'react';
import '../styles/components/FullFeature.scss';
import { CenteredContent } from './CenteredContent';

export const FullFeature = ({ Image, imageSide = 'left', title }) => {
  return (
    <div className="full-feature">
      <CenteredContent reverse={imageSide === 'right'}>
        <div className="side-image">
          <Image width="250" height="250" />
        </div>
        <div className="text-bottom">
          <div>
            <div className="feature-title">{title}</div>
            <div className="feature-text">
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur
              adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
              consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip
            </div>
          </div>
        </div>
      </CenteredContent>
    </div>
  );
};

export default FullFeature;
