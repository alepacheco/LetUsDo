import React from 'react';
import '../styles/components/FeaturesList.scss';
import cafe from '../static/images/cafe.png'
import london from '../static/images/london-bridge.png'
import cash from '../static/images/cash.png'

const ListElement = ({ image }) => {
  return (<div className="item">
    <img className="feature-icon" src={image}></img>
    <div className="list-element-title">Beautiful themes that are responsive and customizable</div>
    <div className="list-element-body">No design skills needed. You have complete control over the look and feel of your website, from its layout, to content</div>
  </div>);
};

export class FeaturesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="features-list">
        <div className="container">
          <ListElement image={london} />
          <ListElement image={cash} />
          <ListElement image={cafe} />
        </div>
      </div>
    );
  }
}

export default FeaturesList;
