import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutPopUp from './CheckoutPopUp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/components/TaskModal.scss';
import * as actions from '../actions/taskModalActions';

class TaskModal extends React.Component {
    render() {
        return (
            <div className="center-wrapper">
                <CheckoutPopUp
                    show={this.props.checkoutPopup}
                    onHide={() => this.props.actions.setDialog(false)}
                ></CheckoutPopUp>

                <Card className="blob center-inner">
                    <Card.Body>
                        <Card.Title className="wedo-title left-text">We Do</Card.Title>
                        <Form className="form-wrapper">
                            <Form.Group>
                                <Form.Control
                                    onChange={(e) => this.props.actions.setTaskTest(e.target.value)}
                                    value={this.props.taskText}
                                    className="task-form-input"
                                    as="textarea"
                                    rows="3"
                                    placeholder="What task do you need done?"
                                />
                            </Form.Group>
                        </Form>
                        <div className="get-it-done-button-wrapper">
                            <Button className="get-it-done-button" onClick={() => this.props.actions.setDialog(true)}>Get it done</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        checkoutPopup: state.taskModal.checkoutPopupOpen,
        taskText: state.taskModal.taskText
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskModal);