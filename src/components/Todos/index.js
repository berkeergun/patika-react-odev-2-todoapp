import {useState, useEffect} from "react";

import "./styles.css"

import ListTodo from "./ListTodo/index"
import NewTodo from "./NewTodo/index"

function Todos() {

  const [todos,setTodos]=useState([
    {
      todo:"Shopping",
    },
    {
      todo:"Cooking",
    },
    {
      todo:"Cleaning",
    },
    {
      todo:"Working",
    },
    {
      todo:"Reading a Book",
    },
    {
      todo:"Playing Guitar",
    }
  ])

  useEffect ( () => {
    console.log(todos)
  },[todos])

  return (
    <div id="container">
      <h1>To Do App</h1>
      <NewTodo todos={todos} addTodo={setTodos} />
      <ListTodo todos={todos} updateTodo={setTodos} />
    </div>
  )
}

export default Todos