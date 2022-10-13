import { useState } from "react";

function Todo() {
    /* 
    -> this state firstly take data from user by using updata function and then
        setText function get data and add into Text variable...
    */
  const [text, setText] = useState("");

  /* 
  ->    This state setTodoupdate function  spread array or Text obj together and
        then rendor into DOM this work then Submit button envoke addtodofun then this
        state do their work

   */
  const [todoupdate, setTodoupdate] = useState([]);

  /* 
    ->  When we add todo so that data get pass into that function and then 
        se simplily update those data into -> Text variable and then we pass text into
        object and then we append or rendor those object into Dom that is the flow.. 
    */
  function update(e) {
    setText(e.target.value);
  }

  /* 
    ->  On clicking on Submit button this function will excute and this simpliy do
        store the data into that newitem object and then pass into setTodoupdate state 
        function and this simplily add into array and render to DOM 
    */
  function addtodofun() {
    const newitem = {
      title: text,
      status: false,
    };

    setTodoupdate([...todoupdate, newitem]);
    console.log([...todoupdate, newitem]);
  }

  return (
    <>
      <div className="header">
        <h2>ToDo 😎 by Nitin Sharma</h2>
        <br />
        <input
          className="inputbtn"
          onChange={update}
          type="text"
          placeholder="Enter here.."
        />
        <br />
        <br />
        <button onClick={addtodofun} className="headerbtn">
          Submit Task
        </button>
      </div>

      <div className="taskrendor">
        <div className="rendortodos">
          {todoupdate.map((el) => (
            <div>
              <p className="h3todo">{el.title}
             <div className="btnsdiv">
             <button className="btn" >Toggle</button>
              <button className="btn">Delete</button>
             </div>
             </p>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { Todo };
