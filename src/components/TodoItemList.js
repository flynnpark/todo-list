import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="TEST" />
                <TodoItem text="TEST" />
                <TodoItem text="TEST" />
            </div>
        );
    }
}

export default TodoItemList;
