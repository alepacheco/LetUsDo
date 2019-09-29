import React from 'react';
import Head from 'next/head';

class CrispLiveChat extends React.Component {
  componentDidMount() {
    // @ts-ignore
    window.$crisp = [];
    // @ts-ignore
    window.CRISP_WEBSITE_ID = process.env.CRISP_WEBSITE_ID;
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
