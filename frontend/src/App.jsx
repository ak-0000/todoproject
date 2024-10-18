import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import axios from "axios";
import { BASE_URL } from "./utils/constants";

function App() {
  const [todo, setTodo] = useState([]);
  const gettodo = async () => {
    const res = await axios.get(BASE_URL + "/todo");
    setTodo(res?.data);
  };
  useEffect(() => {
    setTimeout(() => {
      gettodo();
    }, 5000);
  });

  // const addTodo = (newTodo) => {
  //   setTodo([...todo, newTodo]); // Update the state with the new todo
  // };

  return (
    <div>
      <CreateTodo />
      <Todo todos={todo} />
    </div>
  );
}

export default App;
