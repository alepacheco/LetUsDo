import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutPopUp from './CheckoutPopUp';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../styles/components/TaskModal.scss';
import * as actions from '../actions/taskModalActions';
import CenteredContent from './CenteredContent';

export class TaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.onClickGetItDone = this.onClickGetItDone.bind(this);
    this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
    this.onHideCheckoutPopUp = this.onHideCheckoutPopUp.bind(this);
  }

  async onClickGetItDone() {
    this.props.actions.setDialog(true);
    // TODO add tracking
  }

  onChangeTaskDescription(event) {
    this.props.actions.setTaskTest(event.target.value);
  }

  onHideCheckoutPopUp() {
    this.props.actions.setDialog(false);
  }

  render() {
    return (
      <div className="task-modal">
        <CenteredContent>
          <CheckoutPopUp show={this.props.checkoutPopup} onHide={this.onHideCheckoutPopUp} />
          <Card className="center-inner">
            <Card.Body>
              <Card.Title className="LetUsDo-title left-text">Let Us Do</Card.Title>
              <Form className="form-wrapper">
                <Form.Group>
                  <Form.Control
                    onChange={this.onChangeTaskDescription}
                    value={this.props.taskText}
                    className="task-form-input"
                    as="textarea"
                    rows="3"
                    placeholder="What task do you need done?"
                  />
                </Form.Group>
              </Form>
              <div className="get-it-done-button-wrapper">
                <Button
                  className="get-it-done-button"
                  onClick={this.onClickGetItDone}
                  disabled={this.props.taskText === ''}
                >
                  Get it done
                </Button>
              </div>
            </Card.Body>
          </Card>
        </CenteredContent>
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

TaskModal.propTypes = {
  taskText: PropTypes.string,
  actions: PropTypes.shape({
    setDialog: PropTypes.func,
    setTaskTest: PropTypes.func
  }),
  checkoutPopup: PropTypes.bool
};
