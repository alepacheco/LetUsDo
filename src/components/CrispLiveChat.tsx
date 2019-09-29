import React from 'react';
import Head from 'next/head';

class CrispLiveChat extends React.Component {
  componentDidMount() {
    // @ts-ignore
    window.$crisp = [];
    // @ts-ignore
    window.CRISP_WEBSITE_ID = '1235c6ea-ec25-4935-8480-4517d1b2c930';
  }

  render() {
    return (
      <Head>
        <script async defer src="https://client.crisp.chat/l.js" />
      </Head>
    );
  }
}

export default CrispLiveChat;
