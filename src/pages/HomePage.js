import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import svgBlob from 'svg-blob';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    new svgBlob('.blob');
  }

  render() {
    return (
      <div>
        <div className="blob center-v-h home-page-bck" style={{
          height: 400, // Needs to be inline for the csv
          width: 600
        }}></div>

        <div className="home-page center-v-h">
          <div className="main-text">We Do</div>

          <Card className="form-wrapper">
            <Form >
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>What task do you need done?</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
            <Button className="get-it-done-button">Get it done</Button>
          </Card>
        </div>
      </div>
    );
  }
}

export default HomePage;
