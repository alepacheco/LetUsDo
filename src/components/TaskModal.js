import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../styles/components/TaskModal.scss';
import Checkout from './Checkout';

class TaskModal extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="center-wrapper">
                <Card className="blob center-inner">
                    <Card.Body>
                        <Card.Title className="wedo-title left-text">We Do</Card.Title>
                        <Form className="form-wrapper">
                            <Form.Group>
                                <Form.Control
                                    className="task-form-input"
                                    as="textarea"
                                    rows="3"
                                    placeholder="What task do you need done?"
                                />
                            </Form.Group>
                        </Form>
                        <div className="get-it-done-button-wrapper">
                            <Checkout/>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default TaskModal;