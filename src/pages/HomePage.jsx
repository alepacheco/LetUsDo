import React, { Suspense, lazy } from 'react';

import { LandingHeader } from '../components/LandingHeader';
import { FeaturesList } from '../components/FeaturesList';
import { Footer } from '../components/Footer';

const TaskModal = lazy(() => import('../components/TaskModal'));
const FullFeatureList = lazy(() => import('../components/FullFeatureList'));
const Loading = () => <div>Loading...</div>;

const HomePage = () => (
  <div>
    <LandingHeader />
    <FeaturesList />
    <Suspense fallback={Loading}>
      <TaskModal />
    </Suspense>
    <Suspense fallback={Loading}>
      <FullFeatureList />
    </Suspense>
    <Footer />
  </div>
);

export default HomePage;
