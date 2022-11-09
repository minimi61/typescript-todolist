import React,{useState} from 'react'
import TodoList from './TodoList'
import '../App.css'

interface Content {
    id: number,
    content: string,
    complete: boolean
 };


// type Dispatch<Content> = (value: Content) => void


const InputContent = () => {
  const [inputs, setInputs] = useState<string>('')
  const [todo, setTodo] = useState<Array<Content>>([
    {id:0,content:'블라블라',complete:false}
  ])

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(e.target.value)
  } 

  let nextId = Math.random();
  const submit = (e:any) => {
    e.preventDefault();

    // console.log('submit')
    if (!inputs) return 
    let data = {
      id: nextId,
      content: inputs,
      complete: false
    }
    console.log('data', data)
    setTodo([...todo, data])
    setInputs('')
    
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" className='inputStyle' onChange={inputChange} value={inputs} />
        <button className='btnStyle' type='submit'>+</button>
      </form>
      {todo?.map((x, i) => <TodoList data={x} key={i} setTodo={setTodo} todo={todo} />)}
      
    </div>
  )
}

export default InputContent