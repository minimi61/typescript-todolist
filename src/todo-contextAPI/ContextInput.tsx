import React from 'react'
import '../App.css'

const ContextInput = () => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputs(e.target.value)
  } 

  let nextId = Math.random();
  const submit = (e:any) => {
    e.preventDefault();

    // console.log('submit')
    // if (!inputs) return 
    // let data = {
    //   id: nextId,
    //   content: inputs,
    //   complete: false
    // }
    // console.log('data', data)
    // setTodo([...todo, data])
    // setInputs('')
    
  }
  return (
    <div>
    <form onSubmit={submit}>
        {/* <input type="text" className='inputStyle' onChange={inputChange} value={inputs} /> */}
      <input type="text" className='inputStyle' onChange={inputChange} />
        
      <button className='btnStyle' type='submit'>+</button>
    </form>
    {/* {todo?.map((x, i) => <TodoList data={x} key={i} setTodo={setTodo} todo={todo} />)} */}
    
  </div>  )
}

export default ContextInput