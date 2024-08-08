import React from 'react';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1>Task Management Application</h1>
      <TaskList />
    </div>
  );
};

export default App;
