import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const arrayItem = ['Dormir', 'Comer', 'Estudar', 'Malhar'];
function App() {
  return (
    arrayItem.map((item) => Task(item))
  );
}

export default App;
