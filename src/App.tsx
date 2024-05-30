import React from 'react';
import './App.css';
import Fetch from './components/Fetch';

function App() {
  return (
    <div className="App">
      <Fetch url={'http://localhost:7070/data'} opts={{}} />
      <Fetch url={'http://localhost:7070/loading'} opts={{}} />
      <Fetch url={'http://localhost:7070/error'} opts={{}} />
    </div>
  );
}

export default App;
