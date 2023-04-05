import React from "react";
import "./WordApi.css";
import Use from "./Use";

export default function WordApi(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="WordApi">
        <div className="Container">
          <h2>{props.data.word}</h2>
          <p>
            {props.data.meanings.map(function (elements, index) {
              return (
                <div>
                  <div key={index}>
                    <Use elements={elements} />
                  </div>
                </div>
              );
            })}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
