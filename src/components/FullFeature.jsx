import React from 'react';
import '../styles/components/FullFeature.scss';
import Icon from '../static/images/undraw_process.svg';

export class FullFeature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="full-feature">
        <div className="wrapper">
          lorem ipsum dolor sit amet, consectetur adip
          <div className="center-image">
            <Icon width="250" height="250" />
          </div>
        </div>
      </div>
    );
  }
}

export default FullFeature;
