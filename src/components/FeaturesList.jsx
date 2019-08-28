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

export const FeaturesList = props => (
  <div className="features-list">
    <CenteredContent>
      <ListElement
        image={london}
        title="Based in London"
        content="We are starting in London and have people on the streets ready to take on some work as soon as you send us a request. "
      />
      <ListElement
        image={cash}
        title="Flat fee"
        content="To make it even easier there is no pricing guide, you will always pay the same whatever the task at hand is. Just 20£"
      />
      <ListElement
        image={cafe}
        title="Worries free service"
        content="lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet"
      />
    </CenteredContent>
  </div>
);

export default FeaturesList;
