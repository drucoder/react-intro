import React from 'react'

class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            newTodo: ''
        }
    }

    onChange = (event) => {
        this.setState({newTodo: event.target.value})
    }

    onAdd = () => {
        this.props.addTodoMethod(this.state.newTodo)
        this.setState({newTodo: ''})
    }

    render() {
        return <div>
            <div>This is todo list!</div>
            <div>
                <input 
                    value={this.state.newTodo}
                    onChange={this.onChange}
                />
                <button onClick={this.onAdd}>Add</button>
            </div>
        </div>
    }
}

export default Header
