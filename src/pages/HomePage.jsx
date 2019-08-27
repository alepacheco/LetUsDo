import React, { Suspense, lazy } from 'react';
const TaskModal = lazy(() => import('../components/TaskModal'));

import LandingHeader from '../components/LandingHeader';
import FeaturesList from '../components/FeaturesList';
import Footer from '../components/Footer';

const FullFeatureList = lazy(() => import('../components/FullFeatureList'));

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <LandingHeader />

        <FeaturesList />

        <Suspense fallback={<div>Loading...</div>}>
          <TaskModal />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <FullFeatureList />
        </Suspense>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
