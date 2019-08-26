import React from 'react';
import TaskModal from '../components/TaskModal';
import LandingHeader from '../components/LandingHeader';
import FeaturesList from '../components/FeaturesList';
import Footer from '../components/Footer';
import FullFeatureList from '../components/FullFeatureList';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <LandingHeader />

        <FeaturesList />
        <TaskModal />
        <FullFeatureList />

        <Footer />
      </div>
    );
  }
}

export default HomePage;
