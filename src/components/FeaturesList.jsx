import React from 'react';
import '../styles/components/FeaturesList.scss';
import cafe from '../static/images/cafe.png';
import london from '../static/images/london-bridge.png';
import cash from '../static/images/cash.png';
import CenteredContent from './CenteredContent';

const ListElement = ({ image, title, content }) => (
  <div className="item">
    <img className="feature-icon" src={image} />
    <div className="list-element-title">{title}</div>
    <div className="list-element-body">{content}</div>
  </div>
);

export const FeaturesList = props => {
  return (
    <div className="features-list">
      <CenteredContent>
        <ListElement image={london} title={'Based in London'} content={'ffff'} />
        <ListElement image={cash} title={'Fixed price for your task'} content={'ffff'} />
        <ListElement image={cafe} title={'Worries free service'} content={'ffff'} />
      </CenteredContent>
    </div>
  );
};

export default FeaturesList;
