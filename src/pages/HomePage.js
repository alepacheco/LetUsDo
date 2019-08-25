import React from 'react';
import TaskModal from '../components/TaskModal';
import LandingHeader from '../components/LandingHeader';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <LandingHeader/>
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
