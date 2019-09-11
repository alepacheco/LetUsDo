import React, { Suspense, lazy } from 'react';
// @ts-ignore
import { LandingHeader } from '../components/LandingHeader';
// @ts-ignore
import { FeaturesList } from '../components/FeaturesList';
// @ts-ignore
import { Footer } from '../components/Footer';
// @ts-ignore
import CheckoutPopUp from '../components/CheckoutPopUp/index';
// @ts-ignore
const TaskBox = lazy(() => import('../components/TaskBox'));
// @ts-ignore
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
