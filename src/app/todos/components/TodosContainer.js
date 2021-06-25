import React from 'react'
import { connect } from 'react-redux';
import Buttons from './Buttons';
import actions from '../duck/actions';
import TodoUpdate from './TodoUpdate';



function TodoContainer(props) {

  if (props.todos.edit.text !== "") {
    return (
      <div>
        <TodoUpdate todo={props.todos}/>
      </div>
    )


  }
  return props.todos.list.map((todo, index) =>
    <div className="todo-row full" key={index}>
      <div>
        {todo.text}
      </div>
      <div>
        <Buttons todo={todo} />
      </div>

    </div>)
}


const mapStateToProps = state => ({
  todos: state.todos,


})



const mapDispatchToProps = dispatch => ({
  remove: todo => dispatch(actions.remove(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
