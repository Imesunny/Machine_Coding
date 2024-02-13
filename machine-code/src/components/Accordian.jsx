import React, { useState } from "react";
import questions from "./Api";
import MyAccordian from "./MyAccordian";
import "./accordian.css";

export const Accordian = () => {
  const [data, setData] = useState(questions);
  // console.log(data);
  return (
    <>
      <h2>Accordian</h2>
      <section className="main-div">
        <h1>React Interview</h1>
        {data.map((ele) => {
          return <MyAccordian ele={ele} key={ele.id} />;
        })}
      </section>
    </>
  );
};
