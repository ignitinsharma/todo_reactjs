import { useState } from "react";

function AddTodo() {

   /* 
    -> Text state--> firstly take data from user by using updata function and then
        setText function get data and add into Text variable...
  */
 
  const [text, setText] = useState("");

  /* 
--> We need to manage or store bunch of todos thats why we create this todos state with
    blank array because if we wanna store multiple value we use array or objects so here
    we use array of ojects...
*/
  const [todos, setTodos] = useState([]);



  let handleaddTodo = () => {

    /* 
    --> when user click on add todo button then this function will evoke and then this function 
        store that filled data into object 
    */

      let newitem={
        title:text,
        id:Math.random()+text,
        status:false
      }


      /* 
      --> Here we are simply this uper object into array which is --> todos and then update into state
          why update state..? because we wanna show array of object that why
      */

      let mainarr=[...todos,newitem]

      /* 
      --> After adding newitem object into array we simply pass that updated array into 
          setTodos state for showing into DOM..
      */
     
      setTodos(mainarr);
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
        <button className="handleaddTodo">Submit Task</button>
      </div>

      <div>
        <h1>{text}</h1>
      </div>
    </>
  );
}

export { AddTodo };
