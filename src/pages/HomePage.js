import React from 'react';
import TaskModal from '../components/TaskModal';


class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TaskModal/>
        <br/>
        <br/>
        <br/>
        <h2> Some other section</h2>
      </div>
    );
  }
}

export default HomePage;
