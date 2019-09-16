import React, { Suspense, lazy } from 'react';
import { LandingHeader } from 'components/LandingHeader';
import { FeaturesList } from 'components/FeaturesList';
import { Footer } from 'components/Footer';
import FullFeatureList from 'components/FullFeatureList';
import Guidelines from 'components/Guidelines';
const CheckoutPopUpByType = lazy(() => import('src/components/CheckoutPopUp/CheckoutPopUpByType'));
const TaskBox = lazy(() => import('components/TaskBox'));
const Loading = <div />;

const HomePage = () => (
  <>
    <LandingHeader />
    <Suspense fallback={Loading}>
      <TaskBox />
    </Suspense>
    <FullFeatureList />
    <FeaturesList />
    <Guidelines />
    <Footer />
    <Suspense fallback={Loading}>
      <CheckoutPopUpByType />
    </Suspense>
  </>
);

export default HomePage;
