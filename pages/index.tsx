import React from 'react';
import { LandingHeader } from 'src/components/LandingHeader';
import { Footer } from 'src/components/Footer';
import FullFeatureList from 'src/components/FullFeatureList';
import dynamic from 'next/dynamic';
import Guidelines from 'src/components/Guidelines';

const CheckoutPopUpByType = dynamic(() =>
  import('src/components/CheckoutPopUp/CheckoutPopUpByType')
);
const FeaturesList = dynamic(() => import('src/components/FeaturesList'));
const TaskBox = dynamic(() => import('src/components/TaskBox'));

const HomePage = () => (
  <>
    <LandingHeader />
    <TaskBox />
    <FullFeatureList />
    <FeaturesList />
    <Guidelines />
    <Footer />
    <CheckoutPopUpByType />
  </>
);

export default HomePage;
