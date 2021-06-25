import React from 'react'
import actions from '../duck/actions'
import { connect } from 'react-redux'

function TodoUpdate(props) {
    const todoInput = React.createRef()


    const editTodo = (event) => {
        event.preventDefault()
        console.log(todoInput.current.value)
        if (!todoInput.current.value || /^\s*$/.test(todoInput.current.value)) {
            todoInput.current.value = ""
            return

        }
        props.edit2({ text: todoInput.current.value })
        todoInput.current.value = ""
        console.log()
    }
    return (
        <form onSubmit={editTodo}>
            <input className='todo-input edit' placeholder={props.todo.edit.text}  ref={todoInput} />
            <button className='todo-button edit' type='submit'>Update</button>
        </form>)
}
const mapDispatchToProps = dispatch => ({
    add: todo => dispatch(actions.add(todo)),
    remove: todo => dispatch(actions.remove(todo)),
    edit2: todo => dispatch(actions.edit2(todo))
})
const mapStateToProps = state => ({
    todos: state.todos,
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoUpdate)
