import React, { useState } from "react";

function Addtodomain() {
  const { text, setText } = useState("");

  const handlechange = (e) => {
    setText(e.target.value)
  };

  const handlesubmit = () => {};

  return (
    <div>
      <input
        onChange={handlechange}
        className="inputbtn"
        type="text"
        placeholder="Enter here.."
      />
      <button onClick={handlesubmit} className="headerbtn">
        Submit Task
      </button>
    </div>
  );
}

export default Addtodomain;
