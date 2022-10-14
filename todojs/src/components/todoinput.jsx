import { useState } from "react";

function TodoInput() {
  /* 
  -->  Here firstly take data from user by using setText function and then
        setText function get data and add into Text variable...
  */
  const [text, setText] = useState("");


  

  return (
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
  );
}
export { TodoInput };
