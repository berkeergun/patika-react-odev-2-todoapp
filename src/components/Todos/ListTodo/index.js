import React from "react";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function ListTodo({ todos, updateTodo }) {
  
  const deleteTodo = (e) => {
    const name = e.target.getAttribute("name");
    console.log(name, "Deleted");
    updateTodo(todos.filter((item) => item.todo !== name));

    alertify.error(name+" Deleted!");
  };

  const doneTodo = (e) => {
    const name = e.target.getAttribute("name");
    console.log(name, "Done");
    updateTodo(todos.filter((item) => item.todo !== name));

    alertify.success(name+" Done! Congratulations!");
  };

  const deleteAllTodos = () => {
  // updateTodo(todos.filter((item) => item.todo === "")); 
  updateTodo([]);  
  if(todos.length!==0){
    alertify.error('All Jobs Deleted',);
  }
  };

  return (
    <div>
      <ul className="list">
        {todos.map((item, i) => (
          <li key={i}>
            <button className="btn green" name={item.todo} onClick={doneTodo}>
              Done
            </button>

            <span>{item.todo}</span>

            <button className="btn red" name={item.todo} onClick={deleteTodo}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="result">
        <span>
          We have {todos.length} {todos.length < 2 ? "thing" : "things"} to do !
        </span>

        <button className="btn red" onClick={deleteAllTodos}>
          Delete All
        </button>
      </div>
      
    </div>
  );
}

export default ListTodo;
