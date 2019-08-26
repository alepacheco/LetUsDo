import React from 'react';
import '../styles/components/LandingHeader.scss';
import Icon from '../static/images/undraw_process.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewsletterForm = ({ }) => {
  return (
    <div className="newsletter-form">
      <div className="newsletter-email">
        <Form.Control type="email" placeholder="Enter email" />
        <div className="newsletter-substitle">
          We'll never share your email with anyone else.
            </div>
      </div>

      <Button variant="primary" type="submit" className="newsletter-button">
        Submit
      </Button>
    </div>
  )
};



export class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-header">
        <div className="logo-text">
          LetUsDo.app
                </div>

        <div className="main-content">
          <h3>Get over with all the insudious task of your daily work.</h3>
          <h4>Get someone to do it for you for a flat fee.</h4>
          <p>Sign up for beta updates: </p>

          <NewsletterForm />
        </div>
        <div className="center-image">
          <Icon width="250" height="250" />
        </div>
      </div>
    );
  }
}

export default LandingHeader;
