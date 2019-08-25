import React from 'react';
import TaskModal from '../components/TaskModal';
import LandingHeader from '../components/LandingHeader';
import FeaturesList from '../components/FeaturesList';


class HomePage extends React.Component {

  render() {
    return (
      <div>
        <LandingHeader/>
        <FeaturesList/>
        <TaskModal/>
      </div>
    );
  }
}

export default HomePage;
