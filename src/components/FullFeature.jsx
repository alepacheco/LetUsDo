import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/FullFeature.scss';
import { CenteredContent } from './CenteredContent';

export const FullFeature = ({ Image, imageSide, title, children }) => (
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

FullFeature.defaultProps = {
  imageSide: 'left',
  children: ''
};

FullFeature.propTypes = {
  Image: PropTypes.func.isRequired,
  imageSide: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default FullFeature;
