import React from 'react';
// import '../styles/components/FullFeature.scss';
import { FullFeature } from './FullFeature';
import Selection from '../static/images/undraw_selection.svg';
import Sprint from '../static/images/undraw_design_sprint.svg';
import Park from '../static/images/undraw_at_the_park.svg';

export const FullFeatureList = ({}) => {
  return (
    <div className="full-feature-list">
      <FullFeature Image={Sprint} />
      <FullFeature Image={Selection} imageSide="right" />
      <FullFeature Image={Park} />
    </div>
  );
};

export default FullFeatureList;
