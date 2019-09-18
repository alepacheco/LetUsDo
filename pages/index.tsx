import React from 'react';
import { LandingHeader } from 'src/components/LandingHeader';
import { Footer } from 'src/components/Footer';
import FullFeatureList from 'src/components/FullFeatureList';
import dynamic from 'next/dynamic';

const CheckoutPopUpByType = dynamic(() =>
  import('src/components/CheckoutPopUp/CheckoutPopUpByType')
);
const TaskBox = dynamic(() => import('src/components/TaskBox'));
import Head from 'next/head';

class HomePage extends React.Component {
  componentDidMount() {
    // @ts-ignore
    window.$crisp = [];
    // @ts-ignore
    window.CRISP_WEBSITE_ID = '1235c6ea-ec25-4935-8480-4517d1b2c930';
  }

  render() {
    return (
      <>
        <LandingHeader />
        <TaskBox />
        <FullFeatureList />
        <Footer />
        <CheckoutPopUpByType />
        <Head>
          <script async defer src="https://client.crisp.chat/l.js" />
        </Head>
      </>
    );
  }
}

export default HomePage;
