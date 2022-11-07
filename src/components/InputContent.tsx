import React,{useState} from 'react'
import TodoList from './TodoList'
import '../App.css'

type Content = {
    id: number,
    content: string,
    complete: boolean
 };

let nextId = 1;

const InputContent = () => {
  const [inputs, setInputs] = useState<string>('')
  const [todo, setTodo] = useState<Array<Content>>([
    {id:0,content:'블라블라',complete:false}
  ])

  const inputChange = (e: any) => {
    setInputs(e.target.value)
  } 

  const submit = (e:any) => {
    e.preventDefault();
    // console.log('submit')
    if (!inputs) return 
    let data = {
      id: nextId++,
      content: inputs,
      complete: true
    }
    console.log('data', data)
    setTodo([...todo, data])
    setInputs('')
    
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" className='inputStyle' onChange={inputChange} value={inputs} />
        <button className='btnStyle' type='submit'>
          +
        </button>
      </form>
      {todo?.map((x, i) => <TodoList todo={x} key={i} idx={i} />)}
      
    </div>
  )
}

export default InputContent