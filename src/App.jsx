import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

/**
 * Composant principal de l'application de liste de tâches.
 */
const App = () => {
  return (
    <div className="App">
      <h1>Liste de Tâches avec Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
