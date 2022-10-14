import { useState } from "react";

function AddTodo() {
  /* 
  -->  Here firstly take data from user by using setText function and then
        setText function get data and add into Text variable...
  */
  const [text, setText] = useState("");

  /* 
--> We need to manage or store bunch of todos thats why we create this todos state with
    blank array (here todos is array) because if we wanna store multiple value we use array or objects so here
    we use array of ojects...
*/
  const [todos, setTodos] = useState([]);

  let handleaddTodo = () => {
    /* 
    --> when user click on add todo button then this function will evoke and then this function 
        store that filled data into object 
    */

    let newitem = {
      title: text,
      id: Math.random() + Date.now() + text,
      status: false,
    };

    /* 
      --> Here we are simply this uper object into array which is --> todos and then update into state
          why update state..? because we wanna show array of object that why
      */

    let mainarr = [...todos, newitem];
    //console.log(mainarr);
    /* 
      --> After adding newitem object into array we simply pass that updated array into 
          setTodos state for showing into DOM..
      */

    setTodos(mainarr);
  };

  const togglefun = (id) => {
    const afterupdate = todos.map((todos) => {
      /* 
      --> if we cant use spread todo here so when we toggle after that todos value not showing
      because while toggle todo value is not present thats why we are using todos array here on
      every single thing.... else condition not match so simple todo we will show nothing change....
       */
      return todos.id === id ? { ...todos, status: !todos.status } : todos;
    });

    setTodos(afterupdate);
  };

  return (
    <>
      <div className="header">
        <h2>ToDo 😎 by Nitin Sharma</h2>
        <br />

        {/* 
        --> Onchange in react use for getting input value and then we are simplily catching that value
            and updating that value in text variable and by the help of setText we updating value...
        */}

        <input
          onChange={(e) => setText(e.target.value)}
          className="inputbtn"
          type="text"
          placeholder="Enter here.."
        />

        <br />
        <br />

        {/* 
        --> Onclick on button we need to add todo and update and thats why weadd that 
        function --> handleaddTodo function when user click so that function will envoke...
        */}
        <button onClick={handleaddTodo} className="headerbtn">
          Submit Task
        </button>
      </div>

      <div className="taskrendor">
        <div className="rendortodos">
          {todos.map((el) => (
            <p className="h3todo">
              {el.title}
              <div>
                <p>{el.status ? "Done😍" : "Pending👀"}</p>
                <button onClick={() => togglefun(el.id)}>Toggle</button>
                <button>Toggle</button>
              </div>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export { AddTodo };
