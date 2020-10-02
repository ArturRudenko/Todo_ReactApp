import React from 'react';
import TodoList from './Todo/TodoList';

function App() {
  const todos =[
    {id: 1, completed: false, title: 'Walk with dog'},
    {id: 2, completed: false, title: 'Fill the car'},
    {id: 3, completed: false, title: 'Buy some food'},
  ]

  return (
    <div className='wrapper'>
      <h1>React App</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
