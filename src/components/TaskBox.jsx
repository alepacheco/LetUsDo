import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../styles/components/TaskBox.scss';
import * as actions from '../actions/taskModalActions';
import { CenteredContent } from './CenteredContent';

export class TaskBox extends React.Component {
  constructor(props) {
    super(props);
    this.onClickGetItDone = this.onClickGetItDone.bind(this);
    this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
  }

  async onClickGetItDone() {
    this.props.actions.setDialog(true);
    // TODO add tracking
  }

  onChangeTaskDescription(event) {
    this.props.actions.setTaskTest(event.target.value);
  }

  render() {
    const dayOfWeek = new Date().toLocaleString('en-us', { weekday: 'long' });
    const { taskText } = this.props;

    return (
      <div className="task-modal">
        <CenteredContent>
          <Card className="center-inner">
            <Card.Body>
              <Card.Title className="task-modal-title left-text">
                What can we do for you this {dayOfWeek}?
              </Card.Title>
              <Form className="form-wrapper">
                <Form.Group>
                  <Form.Control
                    onChange={this.onChangeTaskDescription}
                    value={taskText}
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
                  disabled={taskText === ''}
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
)(TaskBox);

TaskBox.propTypes = {
  taskText: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    setDialog: PropTypes.func,
    setTaskTest: PropTypes.func
  }).isRequired,
  checkoutPopup: PropTypes.bool.isRequired
};
