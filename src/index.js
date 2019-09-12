import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            todos: [
                'first',
                'second',
                'third'
            ]
        }
    }

    addTodo = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                todo
            ]
        })
    }
    
    render() {
        return <div className="application">
            <Header 
                addTodoMethod={this.addTodo}
            />
            <Body 
                todosArg={this.state.todos}
            />
        </div>
    }
}

const Body = ({todosArg}) => {
    return <div>
        {todosArg.map((todo, i) => <div key={i}>{todo}</div>)}
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));
