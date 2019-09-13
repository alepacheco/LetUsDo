import React, { Suspense, lazy } from 'react';
import { LandingHeader } from 'components/LandingHeader';
import { FeaturesList } from 'components/FeaturesList';
import { Footer } from 'components/Footer';
const CheckoutPopUp = lazy(() => import('src/components/CheckoutPopUp/CheckoutPopUp'));
const TaskBox = lazy(() => import('components/TaskBox'));
const FullFeatureList = lazy(() => import('components/FullFeatureList'));
const Loading = <div>Loading...</div>;

const HomePage = () => (
  <>
    <LandingHeader />
    <FeaturesList />
    
    <Suspense fallback={Loading}>
      <CheckoutPopUp />
    </Suspense>

    <Suspense fallback={Loading}>
      <CheckoutPopUp />
    </Suspense>

    <Suspense fallback={Loading}>
      <FullFeatureList />
    </Suspense>
    <Footer />
  </>
);

export default HomePage;
