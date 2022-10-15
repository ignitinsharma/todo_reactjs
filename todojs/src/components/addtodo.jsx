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
      title: text, // text is nothing but variable state where we are entering our todo data
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

  let afterupdate;
  const togglefun = (id) => {
    afterupdate = todos.map((todos) => {
      /* 
      --> if we cant use spread todo here so when we toggle after that todos value not showing
      because while toggle todo value is not present thats why we are using todos array here on
      every single thing.... else condition not match so simple todo we will show nothing change....
       */
      return todos.id === id ? { ...todos, status: !todos.status } : todos;
    });

    /*
  --> after changing status of status into object we simply update that into state for
      rendor into DOM....
  */
    setTodos(afterupdate);
  };

  let deletefun = (id) => {
    /* 
    --> Here we are checking while iterating in whhole array if which element user click and whose
        id is same which is itreating so we skip that element and pass rest elements and print 
        means pass through out map function...
     */
    let value = todos.map((todo) => {
      return todo.id !== id;
    });

    /*
    --> after skiping those element whose id is same which user is click and that is present on 
        array so we skip that one and pass ohter....
  */
    setTodos(value);
    
  
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
          {/* 
          --> Here we are printing whole arrays elements by using that map High order function map
              and then we accessing the value el.status (means status inside array of object)..
          */}

          {todos.map((el) => (
            <p className="h3todo">
              {el.title}
              <div>
                <p className="tgl">{el.status ? "Done😍" : "Pending👀"}</p>

                {/* 
                --> Here when todos map excute create that elemetns on every iteration buttons and status p tag
                    but when the status p tag value change when button toggle fun is excute and this function
                    we pass simple id from array of object and then we pass to toggle function and perform operation...
                 */}

                <button className="btn" onClick={() => togglefun(el.id)}>
                  Toggle
                </button>
                <button onClick={() => deletefun(el.id)} className="btn">
                  Delete
                </button>
              </div>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export { AddTodo };
