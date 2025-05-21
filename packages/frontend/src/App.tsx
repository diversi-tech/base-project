import React from 'react';
import ItemDisplay from './components/ItemDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project base viewer</h1>
      </header>
      <main>
        <ItemDisplay />
      </main>
    </div>
  );
}

export default App;