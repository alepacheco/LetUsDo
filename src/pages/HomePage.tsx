import React, { Suspense, lazy } from 'react';
import { LandingHeader } from 'components/LandingHeader';
import { Footer } from 'components/Footer';
const FullFeatureList = lazy(() => import('components/FullFeatureList'));
const FeaturesList = lazy(() => import('components/FeaturesList'));
const Guidelines = lazy(() => import('components/Guidelines'));
const CheckoutPopUpByType = lazy(() => import('src/components/CheckoutPopUp/CheckoutPopUpByType'));
const TaskBox = lazy(() => import('components/TaskBox'));
const Loading = <div />;

const HomePage = () => (
  <>
    <LandingHeader />
    <Suspense fallback={Loading}>
      <TaskBox />
    </Suspense>
    <Suspense fallback={Loading}>
      <FullFeatureList />
      <FeaturesList />
      <Guidelines />
    </Suspense>
    <Footer />
    <Suspense fallback={Loading}>
      <CheckoutPopUpByType />
    </Suspense>
  </>
);

export default HomePage;
