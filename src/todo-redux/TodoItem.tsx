import React from 'react'
import { Todo } from './modules/redux'

const TodoItem = ({todo}:{todo:Todo}) => {

  return (
    <li style={{marginTop:'50px'}}>
      <span>{todo.content}</span>
    </li>
  )
}

export default TodoItem