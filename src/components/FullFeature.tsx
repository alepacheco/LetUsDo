import React from 'react';
import '../styles/components/FullFeature.scss';
import { CenteredContent } from './CenteredContent';

type FullFeatureProps = {
  Image?: any;
  imageSide?: string;
  title: string;
  hideImage?: boolean;
};
export const FullFeature: React.FC<FullFeatureProps> = ({
  Image,
  imageSide,
  title,
  children,
  hideImage
}) => (
  <div className="full-feature">
    <CenteredContent reverse={imageSide === 'right'}>
      {Image && (
        <div className={`side-image ${hideImage ? 'hide-image' : ''}`}>
          <Image width="250" height="250" />
        </div>
      )}
      <div className={`text-bottom ${hideImage ? 'extra-top-margin' : ''}`}>
        <div>
          <div className="feature-title">{title}</div>
          <div className="feature-text">{children}</div>
        </div>
      </div>
    </CenteredContent>
  </div>
);

export default FullFeature;
