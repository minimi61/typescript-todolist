import React from 'react';
import './App.css';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

function App() {
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  return (
    <SampleProvider>
      <div className="App">
        <header className="App-header">
          {/* <Counter /> */}
          {/* <MyForm onSubmit={onSubmit} />; */}
          <ReducerSample />
        </header>
      </div>
    </SampleProvider>
  );
}

export default App;
