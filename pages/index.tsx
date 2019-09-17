import React from 'react';
import { LandingHeader } from 'src/components/LandingHeader';
import { Footer } from 'src/components/Footer';
import FullFeatureList from 'src/components/FullFeatureList';
import FeaturesList from 'src/components/FeaturesList';
import Guidelines from 'src/components/Guidelines';
import CheckoutPopUpByType from 'src/components/CheckoutPopUp/CheckoutPopUpByType';
import TaskBox from 'src/components/TaskBox';

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
