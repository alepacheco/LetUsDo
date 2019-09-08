import React, { Suspense, lazy } from 'react';

import { LandingHeader } from '../components/LandingHeader';
import { FeaturesList } from '../components/FeaturesList';
import { Footer } from '../components/Footer';
import CheckoutPopUp from '../components/CheckoutPopUp';

const TaskBox = lazy(() => import('../components/TaskBox'));
const FullFeatureList = lazy(() => import('../components/FullFeatureList'));
const Loading = <div>Loading...</div>;

const HomePage = () => (
  <div>
    <LandingHeader />
    <FeaturesList />
    <Suspense fallback={Loading}>
      <TaskBox />
      <CheckoutPopUp />
    </Suspense>
    <Suspense fallback={Loading}>
      <FullFeatureList />
    </Suspense>
    <Footer />
  </div>
);

export default HomePage;
