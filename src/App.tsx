import React from 'react';
import './App.css';
import Header from './components/Header';
import InputContent from './components/InputContent';
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
          {/* <ReducerSample /> */}
          <Header />
          <InputContent />
        </header>
      </div>
    </SampleProvider>
  );
}

export default App;
