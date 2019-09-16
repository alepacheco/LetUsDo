import React from 'react';
import 'src/styles/components/Footer.scss';

export const Footer = () => (
  <div className="footer">
    <div className="separator" />
    <div className="wrapper">
      We are in beta phase and would love to hear your feedback.
      <br />
      Please get in touch with the email:{' '}
      <a href="mailto:support@letusdo.app">support@letusdo.app</a>
    </div>
  </div>
);

export default Footer;
