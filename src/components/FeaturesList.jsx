import React from 'react';
import '../styles/components/FeaturesList.scss';
import cafe from '../static/images/cafe.png';
import london from '../static/images/london-bridge.png';
import cash from '../static/images/cash.png';
import CenteredContent from './CenteredContent';

const ListElement = ({ image }) => (
  <div className="item">
    <img className="feature-icon" src={image} />
    <div className="list-element-title">Beautiful themes that are responsive and customizable</div>
    <div className="list-element-body">
      No design skills needed. You have complete control over the look and feel of your website,
      from its layout, to content
    </div>
  </div>
);

export class FeaturesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="features-list">
        <CenteredContent>
          <ListElement image={london} />
          <ListElement image={cash} />
          <ListElement image={cafe} />
        </CenteredContent>
      </div>
    );
  }
}

export default FeaturesList;
