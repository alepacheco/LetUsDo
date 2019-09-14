import React, { Suspense, lazy } from 'react';
import { LandingHeader } from 'components/LandingHeader';
import { FeaturesList } from 'components/FeaturesList';
import { Footer } from 'components/Footer';
const CheckoutPopUpByType = lazy(() => import('src/components/CheckoutPopUp/CheckoutPopUpByType'));
const TaskBox = lazy(() => import('components/TaskBox'));
const FullFeatureList = lazy(() => import('components/FullFeatureList'));
const Loading = <div>Loading...</div>;

const HomePage = () => (
  <>
    <LandingHeader />
    <FeaturesList />

    <Suspense fallback={Loading}>
      <CheckoutPopUpByType />
    </Suspense>

    <Suspense fallback={Loading}>
      <TaskBox />
    </Suspense>

    <Suspense fallback={Loading}>
      <FullFeatureList />
    </Suspense>
    <Footer />
  </>
);

export default HomePage;
