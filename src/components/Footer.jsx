import React from 'react';
import '../styles/components/Footer.scss';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="footer" >
      <div className="separator" />
      <div className="wrapper" >
        We are in beta phase and would love to hear your feedback.
      <br />
        Please get in touch with the email: contact@letusdo.app
      </div>
    </div>
    );
  }
}

export default Footer;
