import React, { useState } from "react";
import Addtodomain from "./Addtodo";
import Todolist from "./Todolist";

// this function is parent of addtodo or todolist components
function Todo() {
  const [todo, setTodo] = useState([]);

  let handleadd = () => {};

  return (
    <div>
      <Addtodomain handleadd={handleadd}/>
      <Todolist />
    </div>
  );
}

export default Todo;
