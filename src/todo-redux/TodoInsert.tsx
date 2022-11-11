import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { RootState } from './modules'
import TodoItem from './TodoItem'
import { addTodo } from './modules/redux'

const TodoInsert = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer)
  console.log(todos)
  const [inputs, setInputs] = useState<string>('')

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value)
  } 

  const submit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputs) return 
    dispatch(addTodo(inputs))
    setInputs('')
    
  }
  return (
    <div>
    <form onSubmit={submit}>
        <input type="text" className='inputStyle' onChange={inputChange} value={inputs} />  
      <button className='btnStyle' type='submit'>+</button>
    </form>
      {todos.map((x) => 
        <TodoItem key={x.id} todo={x} />
    )}
  </div>  )
}

export default TodoInsert