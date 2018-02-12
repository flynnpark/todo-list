import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
    id = 3;

    state = {
        input: '',
        todos: [
            { id: 0, text: ' 리액트 소개', checked: false },
            { id: 1, text: ' 리액트 소개', checked: true },
            { id: 2, text: ' 리액트 소개', checked: false }
        ]
    }

    _handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    _handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false
            })
        });
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this._handleCreate();
        }
    }

    render() {
        const { input } = this.state;
        const {
            _handleChange,
            _handleCreate,
            _handleKeyPress
        } = this;

        return (
            <div>
                <TodoListTemplate form={(
                    <Form
                        value={input}
                        onKeyPress={_handleKeyPress}
                        onChange={_handleChange}
                        onCreate={_handleCreate}
                    />
                )}>
                    <TodoItemList />
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;
