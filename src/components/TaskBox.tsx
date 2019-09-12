import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/components/TaskBox.scss';
import * as actions from '../actions/taskModalActions';
import { CenteredContent } from './CenteredContent';
import { trackEvent } from 'src/utils/analytics';

type TaskBoxProps = {
  actions: {
    setTaskText: (text: string) => void;
    setDialog: (state: string) => void;
  };
  taskText: string;
};

export const TaskBox: React.FC<TaskBoxProps> = ({ actions, taskText }) => {
  const onClickGetItDone = () => {
    actions.setDialog('open');
    trackEvent({
      category: 'click',
      action: 'get it done button clicked',
      label: `containing task: ${taskText}`
    });
  };

  const onChangeTaskDescription = (event: any) => {
    actions.setTaskText(event.target.value);
    trackEvent({
      category: 'formChange',
      action: 'TaskBox text input change',
      label: event.target.value
    });
  };

  const dayOfWeek = new Date().toLocaleString('en-us', { weekday: 'long' });

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
                  onChange={onChangeTaskDescription}
                  value={taskText}
                  className="task-form-input"
                  as="textarea"
                  rows="3"
                  placeholder="What task do you need done?"
                />
              </Form.Group>
            </Form>
            <div className="get-it-done-button-wrapper">
              <Button className="get-it-done-button" onClick={onClickGetItDone}>
                Get it done
              </Button>
            </div>
          </Card.Body>
        </Card>
      </CenteredContent>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    taskText: state.taskModal.taskText
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskBox);
