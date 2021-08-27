import React, {useState, useEffect} from "react";
import './App.css';
//Importing Components
import Form from "./components/Form";
import ToDoList from "./components/TodoList";


function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const[filteredTodos, setFilteredTodos] = useState([]); 

  // runs once
  useEffect(() => {
    getLocalTodos();
  }, []);
  
 //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

// functions
const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
    case 'uncompleted' :
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default :
      setFilteredTodos(todos);
      break;
  }
};

//save to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') == null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }; 

  return (
    <div className="App">
        <div className="heading">
          <h1>Todoer</h1>
          <h3>developed by <a href="https://ahaseeb.netlify.app/" target="_blank"><mark className="name">Abdul Haseeb</mark></a></h3>
        </div>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
