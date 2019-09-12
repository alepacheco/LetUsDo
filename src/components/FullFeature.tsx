import React from 'react';
import '../styles/components/FullFeature.scss';
import { CenteredContent } from './CenteredContent';

type FullFeatureProps = {
  Image: any;
  imageSide?: string;
  title: string;
}
export const FullFeature: React.FC<FullFeatureProps> = ({ Image, imageSide, title, children }) => (
  <div className="full-feature">
    <CenteredContent reverse={imageSide === 'right'}>
      <div className="side-image">
        <Image width="250" height="250" />
      </div>
      <div className="text-bottom">
        <div>
          <div className="feature-title">{title}</div>
          <div className="feature-text">{children}</div>
        </div>
      </div>
    </CenteredContent>
  </div>
);

export default FullFeature;
