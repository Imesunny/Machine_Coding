import React, { useState } from "react";

const MyAccordian = ({ ele }) => {
  console.log(ele, "from MyAccordian");

  const[show, setShow] = useState(false);

  const handleToggle=()=>{
    setShow(!show);
  }
  return (
    <>
      <div className="main-heading">
        <p onClick={handleToggle}>{show ? '➖' : "➕"}</p>
        <h3>{ele.question}</h3>
      </div>

      {show && <p className="answers">{ele.answer}</p>}
    </>
  );
};

export default MyAccordian;
