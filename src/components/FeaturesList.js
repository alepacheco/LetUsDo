import React from 'react';
import '../styles/components/FeaturesList.scss';


const ListElement = (props) => {

  return (<div className="item">
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
          <ListElement />
          <ListElement />
          <ListElement />
        </div>
      </div>
    );
  }
}

export default FeaturesList;
