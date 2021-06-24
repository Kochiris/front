import React from 'react'
import { connect } from 'react-redux'
import actions from '../duck/actions'


const TodosForm = (props) =>{

    const todoInput = React.createRef()

    const addTodo = (event)=>{
        event.preventDefault()
        console.log(todoInput.current.value)
        if(!todoInput.current.value || /^\s*$/.test(todoInput.current.value)){
            return
            todoInput.current.value=""
        }
        props.add({text:todoInput.current.value})
        todoInput.current.value=""
        console.log()
    }

    return(
    <form onSubmit={addTodo}>
        <input ref={todoInput}/>
        <button type='submit'>Add ToDo</button>
    </form>)



    
    
}
const mapDispatchToProps = dispatch =>({
    add: todo => dispatch(actions.add(todo)),
    remove: todo => dispatch(actions.remove(todo))
})
export default connect(null, mapDispatchToProps)(TodosForm)