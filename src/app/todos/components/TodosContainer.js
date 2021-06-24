import React from 'react'
import { connect } from 'react-redux';
import Buttons from './Buttons';
import actions from '../duck/actions';
const TodoContainer=({todos, remove})=> todos.list.map(todo =>
<div>
  <div>
    {todo.text}
  </div>
  <div>
    <Buttons todo={todo}  />
  </div>
  
</div>)

const mapStateToProps= state => ({
  todos: state.todos
  
})



const mapDispatchToProps = dispatch =>({
  remove: todo => dispatch(actions.remove(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
