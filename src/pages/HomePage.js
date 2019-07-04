import React from 'react';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const HomePage = () => {
  return (
    <div className="home-page center-v-h">
      <h1 className="main-text">We Do</h1>
      <p className="sub-text">Lorem isupm </p>
      <Card>
        <Form className="cccc">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>What task do you need done?</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
        <Button className="get-it-done-button">Get it done</Button>
      </Card>
    </div>
  );
};

export default HomePage;
