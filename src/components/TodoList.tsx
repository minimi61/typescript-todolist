import React from 'react'
import '../App.css'

interface  Content  {
  id: number,
  content: string,
  complete: boolean
};

// interface PropsTodo {
//   setTodo: React.Dispatch<React.SetStateAction<Content[]>>
// }

const TodoList = ({ data ,setTodo, todo}:{data: Content, setTodo:  React.Dispatch<React.SetStateAction<Content[]>>, todo: Content[]}) => {

  const isDone = () => {
    const toggle = todo.map(x =>  (x.id === data.id) ? (!x.complete) : x.complete )
    console.log([...todo],toggle)
    // setTodo()

    // [...todo].map((x, i) => 
    //   {if(x.id === data.id){x.complete: !x.complete}}
    // )
  }
  const del = () => {
    setTodo(todo.filter((x) => x.id !== data.id))
  } 
  return (
    <div className='Container'>
      {data.complete ? <div></div> : <div>{data.content}</div>}
      <div>
        <button className='noStyleBtn' onClick={isDone}>✅</button>
        <button className='noStyleBtn' onClick={del}>❌</button>
      </div>
    </div>
  )
}

export default TodoList