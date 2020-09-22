import React from 'react';
import logo from './logo.svg';
import './App.css';
import  MyComp from'./components/mycomp';
import  NoteApp from'./components/NoteApp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComp/>
        <NoteApp/>
      </header>
    </div>
  );
}

export default App;
