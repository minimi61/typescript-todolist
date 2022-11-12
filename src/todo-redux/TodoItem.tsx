import React from 'react'
import { Todo } from './modules/redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from './modules/redux'
import { toggleTodo } from './modules/redux'

const TodoItem = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeTodo(todo.id))
  }
  const done = () => {
    dispatch(toggleTodo(todo.id))
  }
  return (
    <li style={{marginTop:'50px',display:'flex',justifyContent:'space-between'}}>
      {todo.complete ? <span style={{textDecoration:'line-through'}}> {todo.content}</span> :  <span> {todo.content}</span>}
      <div>
        <span style={{cursor:'pointer',marginRight:'20px'}} onClick={remove}>❌</span>
        <span style={{cursor:'pointer'}} onClick={done}>✅</span>
      </div>
    </li>
  )
}

export default TodoItem