import React from 'react'
import {useTodo, useTodoDispatch} from './ContextTodo'

interface  Content  {
  id: number,
  content: string,
  complete: boolean
};


const ContextList = ({ data, todo }: { data: Content, todo: Content[] }) => {
  // const todo = useTodo();
  const todoDispatch = useTodoDispatch();

  const isDone = () => {
    // const toggle = todo.map((x) => x.id === data.id? {...x, complete: !x.complete} : x)
    // setTodo(toggle)
    todoDispatch({type: 'Toggle_complete', id: data.id})
  }

  const remove = () => {
    console.log(data.id)
    todoDispatch({ type: 'Remove_Todo', id: data.id })
  } 
  return (
    <div className='Container'>
    {data.complete ? <div className='toggleLine'>{data.content}</div> : <div>{data.content}</div>}
    <div>
      <button className='noStyleBtn' onClick={isDone}>✅</button>
      <button className='noStyleBtn' onClick={remove}>❌</button>
    </div>
  </div>
  )
}

export default ContextList