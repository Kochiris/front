import React from 'react'
import { connect } from 'react-redux'
import actions from '../duck/actions'


const TodosForm = (props) => {

    const todoInput = React.createRef()

    const addTodo = (event) => {
        event.preventDefault()
        console.log(todoInput.current.value)
        if (!todoInput.current.value || /^\s*$/.test(todoInput.current.value)) {
            todoInput.current.value = ""
            return

        }
        props.add({ text: todoInput.current.value })
        todoInput.current.value = ""
        console.log()
    }

    return (
        <form className="todo-form" onSubmit={addTodo}>
            <input placeholder="Add your ToDo" className='todo-input' ref={todoInput} />
            <button className='todo-button' type='submit'>Add ToDo</button>
        </form>)



}
const mapDispatchToProps = dispatch => ({
    add: todo => dispatch(actions.add(todo)),
    remove: todo => dispatch(actions.remove(todo))
})
export default connect(null, mapDispatchToProps)(TodosForm)