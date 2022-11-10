import React, { useState } from 'react'
import {useTodo, useTodoDispatch} from './ContextTodo'
import '../App.css'
import ContextList from './ContextList'

const ContextInput = () => {
  const todo = useTodo();
  const todoDispatch = useTodoDispatch();

  const [inputs, setInputs] = useState<string>('')

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value)
  } 

  const submit = (e:any) => {
    e.preventDefault();
    console.log(inputs)

    if (!inputs) return 
    todoDispatch({type:'Add_Todo', content: inputs })

    setInputs('')
    
  }
  return (
    <div>
    <form onSubmit={submit}>
        <input type="text" className='inputStyle' onChange={inputChange} value={inputs} />
        
      <button className='btnStyle' type='submit'>+</button>
    </form>
    {todo?.map((x, i) => <ContextList data={x} key={i} todo={todo} />)}
    
  </div>  )
}

export default ContextInput