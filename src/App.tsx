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

function App() {
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  return (
    // <SampleProvider>
        <ContextTodoProvider>
          <div className="App">
            <header className="App-header">
              {/* <Counter /> */}
              {/* <MyForm onSubmit={onSubmit} />; */}
              {/* <ReducerSample /> */}
              <Header />
              {/* <InputContent /> */}
              {/* <Test/> */}
            </header>
          </div>
        </ContextTodoProvider>
    // </SampleProvider>
  );
}

export default App;
