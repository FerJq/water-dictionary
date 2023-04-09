import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  console.log(props.pictures);
  return (
    <div className="Pictures">
      {props.pictures.map((pic, index) => {
        return (
          <div key={index}>
            <img src={pic.src.landscape} alt={pic.src.photographer} />
          </div>
        );
      })}
    </div>
  );
}
