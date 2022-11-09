import React,{useState, useEffect} from 'react'
import '../App.css'

const Test = () => {
  const [count, setCount] = useState<number>(1)

  useEffect(() => {
    setCount(count + 1);
    setCount((count) => count + 1)
    setCount(count + 1);
    setCount((count) => count + 1)
    setCount(count + 1);
    setCount((count) => count + 1)
  }, [])

  const [count1, setCount1] = useState<number>(1);
  useEffect(()=>{
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  },[])
  
  const [count2, setCount2] = useState<number>(1);
  useEffect(()=>{
    setCount2(prev=> prev + 1);
    setCount2(prev=> prev + 1);
    setCount2(prev => prev + 1);
  }, [])
  



  return (
    <div className='headerStyle'>
      count: {count}
      <br/>
      count1: {count1}
      <br/>
      count2: {count2}
    </div>
  )
 

}

export default Test