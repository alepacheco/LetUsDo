import React from 'react';
import propTypes from 'prop-types';
import '../styles/components/FullFeature.scss';
import { CenteredContent } from './CenteredContent';

type FullFeatureProps = {
  image?: string;
  imageSide?: string;
  title: string;
  hideImage?: boolean;
  children?: any;
};
export const FullFeature: React.FC<FullFeatureProps> = ({
  image,
  imageSide,
  title,
  children,
  hideImage
}) => (
  <div className="full-feature">
    <CenteredContent reverse={imageSide === 'right'}>
      {image && (
        <div className={`side-image ${hideImage ? 'hide-image' : ''}`}>
          <img src={image} width="250" height="250" />
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

FullFeature.propTypes = {
  image: propTypes.string,
  imageSide: propTypes.string,
  title: propTypes.string.isRequired,
  hideImage: propTypes.bool,
  children: propTypes.any
}

export default FullFeature;