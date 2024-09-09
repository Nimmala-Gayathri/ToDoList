import logo from './logo.svg';
import './App.css';
import ItemsContainer from './componet/ItemsContainer';
import InputContainer from './componet/InputContainer';
import { useState } from 'react';
import CountContainer from './componet/CountContainer'

function App() {
  const [todos, setTodos] =useState([]);

  const addNewToDo = (newTodo) =>{
    setTodos([...todos,newTodo])
  }

  const deleteToDo = (toDoDeleted) =>{
    const filtaredToDo = todos.filter((item) => item!==toDoDeleted);
    setTodos(filtaredToDo)
  };
  console.log(todos)
  return (
    <div className='App'>
      <h1 style={{background:"aliceblue", height: "15vh", display:"flex", alignItems: "center",justifyContent:"center",  marginTop: "0%"}}> My ToDo</h1>
      <CountContainer itemsCount = {todos.length}/>
      <ItemsContainer todos ={todos} deleteToDo ={deleteToDo}/>
      <InputContainer addNewToDo ={addNewToDo} />
    </div>
  );
}

export default App;
