import { useState } from "react";

function Todo() {
  /* 
    -> Text state--> firstly take data from user by using updata function and then
        setText function get data and add into Text variable...
    */
  const [text, setText] = useState("");


  /* 
  ->    Todoupdate state--> setTodoupdate function  spread array or Text obj together and
        then rendor into DOM this work then Submit button envoke addtodofun then this
        state do their work

   */
  const [todoupdate, setTodoupdate] = useState([]);

  /* 
    ->  When we add todo so that data get pass into that function and then 
        se simplily update those data into -> Text variable and then we pass text into
        object and then we append or rendor those object into Dom that is the flow.. 
    */

  

  /* 
    ->  On clicking on Submit button this function will excute and this simpliy do
        store the data into that newitem object and then pass into setTodoupdate state 
        function and this simplily add into array and render to DOM 
    */
  function addtodofun() {
    const newitem = {
      title: text,
      id: Math.random()+Date.now()+text,
      status: false,
    };


    setTodoupdate([...todoupdate, newitem]);
    console.log([...todoupdate, newitem]);
  }


  function update(e) {
    setText(e.target.value);
  }

  /* 
    Status state--> this when user click on toggle button and toggle function invoked and then
    setStatus function check the value of state what is if this is false so it convert true and 
    if value if true then make false and then save into status and then 

  */


  function toggle(id){
    /*
    --> Here we changing value of state opposite and then update into setStatus function
        and then setstatus function simple update the status value and then on button we 
        apply condition if value is true so done and else pending...{status?"Done 😍":"Pending 👀"}

    */ 

      const todoafterupdate = todoupdate.map((e)=>{
        return e.id=== id?{...e, status: !e.status} :e;
      })
   
      setTodoupdate(todoafterupdate)
   
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
                <p className="h3todo">
                    {el.title}
                    <p>{el.status?"DONE":"NOT DONE"}</p>
                    <div className="btnsdiv">
                    <button className="btn" onClick={()=>toggle()}>TOGGLE</button>
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
