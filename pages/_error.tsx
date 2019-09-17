import React from 'react';
import Router from 'next/router';

const ResponseByError: React.FC<{ statusCode?: number }> = ({ statusCode }) => {
  if (!statusCode) {
    return <p>An error occurred on client</p>;
  }
  switch (statusCode) {
    case 404:
      Router.push('/');
      return <div />;
    default:
      return <p>An error occurred on the server</p>;
  }
};

class Error extends React.Component<{ statusCode: number }> {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return <ResponseByError statusCode={this.props.statusCode} />;
  }
}

export default Error;
