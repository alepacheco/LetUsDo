import React from 'react';
import '../styles/components/LandingHeader.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Icon from '../static/images/undraw_process.svg';

const NewsletterForm = ({}) => (
  <div className="newsletter-form">
    <div className="newsletter-email">
      <Form.Control type="email" placeholder="Enter email" />
      <div className="newsletter-substitle">We'll never share your email with anyone else.</div>
    </div>

    <Button variant="primary" type="submit" className="newsletter-button">
      Submit
    </Button>
  </div>
);

export const LandingHeader = () => (
  <div className="landing-header">
    <div className="logo-text">LetUsDo.app</div>
    <div className="main-content">
      We help you with the
      <b> tasks </b>
      that you don&apos;t feel like doing
    </div>
    <div className="center-image">
      <Icon width="250" height="250" />
    </div>
  </div>
);

export default LandingHeader;
