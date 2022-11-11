import React from 'react';
import './App.css';
import Header from './components/Header';
import InputContent from './todo-useState/InputContent';
import Counter from './tests/Counter';
import MyForm from './tests/MyForm';
import ReducerSample from './tests/ReducerSample';
import { SampleProvider } from './tests/SampleContext';
import Test from './tests/Test';
import {ContextTodoProvider} from './todo-contextAPI/ContextTodo'
import ContextInput from './todo-contextAPI/ContextInput';
import TodoInsert from './todo-redux/TodoInsert';

function App() {
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  return (
    // <SampleProvider>
        // <ContextTodoProvider>
          <div className="App">
            <header className="App-header">
              <div className='fontColorBlack'>
                {/* <Counter /> */}
                {/* <MyForm onSubmit={onSubmit} />; */}
                {/* <ReducerSample /> */}
                {/* <Test/> */}
                <Header />
                {/* <InputContent /> */}
                <TodoInsert/>
              </div>
            </header>
          </div>
        // </ContextTodoProvider>
    // </SampleProvider>
  );
}

export default App;
