import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';

class App extends Component {
    render() {
        return (
            <div>
                <TodoListTemplate>
                    템플릿 완성
                </TodoListTemplate>
            </div>
        );
    }
}

export default App;
