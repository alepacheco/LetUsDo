import React from 'react';
import { LandingHeader } from 'src/components/LandingHeader';
import { Footer } from 'src/components/Footer';
import FullFeatureList from 'src/components/FullFeatureList';
import CrispLiveChat from 'src/components/CrispLiveChat';
import dynamic from 'next/dynamic';

const CheckoutPopUpByType = dynamic(() =>
  import('src/components/CheckoutPopUp/CheckoutPopUpByType')
);
const TaskBox = dynamic(() => import('src/components/TaskBox'));

class HomePage extends React.Component {
  render() {
    return (
      <>
        <LandingHeader />
        <TaskBox />
        <FullFeatureList />
        <Footer />
        <CheckoutPopUpByType />
        <CrispLiveChat />
      </>
    );
  }
}

export default HomePage;
