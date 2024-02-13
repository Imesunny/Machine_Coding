import React from "react";
import "./display.css";

export const DisplayData = ({ ele }) => {
  return (
    <>
      <div className="single-product">
        <img src={ele.image} alt="product"></img>
        <h5>Title: {ele.title}</h5>
        <p>Category: {ele.category}</p>
        <p>Price: {ele.price}</p>
        <p>
          Rating: {ele.rating.rate}
          <span className="span">
            Rate: {ele.rating?.count}
          </span>
        </p>
      </div>
    </>
  );
};
