import React from 'react'
import '../App.css'

interface  Content  {
  id: number,
  content: string,
  complete: boolean
};


const TodoList = ({ todo, idx }:{todo: Content, idx: number}) => {
  console.log(todo,idx)
  const isDone = () => {
    console.log('완료', todo.id)

  }
  const del = () => {
    console.log('삭제')
  } 
  return (
    <div className='Container'>
      <div>{todo.content}</div>
      <div>
        <button className='noStyleBtn' onClick={isDone}>✅</button>
        <button className='noStyleBtn' onClick={del}>❌</button>
      </div>
    </div>
  )
}

export default TodoList