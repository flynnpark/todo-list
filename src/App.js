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

    _handleToggle = (id) => {
        const { todos } = this.state;

        // 파라미터로 받은 id를 가지고 아이템을 찾는다
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; // 선택한 객체
        const nextTodos = [...todos]; // 배열을 복사

        // 기존 값을 복사하고, checked 값을 덮어쓴다.
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    }

    render() {
        const { input, todos } = this.state;
        const {
            _handleChange,
            _handleCreate,
            _handleKeyPress,
            _handleToggle
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
                    <TodoItemList todos={todos} onToggle={_handleToggle} />
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;
