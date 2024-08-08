import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    addTask = (task) => {
        const newTask = { id: Date.now(), text: task, completed: false };
        this.setState({ tasks: [...this.state.tasks, newTask] });
    };

    deleteTask = (id) => {
        this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
    };

    toggleTaskCompletion = (id) => {
        this.setState({
            tasks: this.state.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        });
    };

    render() {
        return (
            <div>
                <TaskForm addTask={this.addTask} />
                <ul>
                    {this.state.tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            deleteTask={this.deleteTask}
                            toggleTaskCompletion={this.toggleTaskCompletion}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default TaskList;
