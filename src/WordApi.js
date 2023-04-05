import React from "react";
import Definitions from "./Definitions";

export default function WordApi(props) {
  if (props.result) {
    return (
      <div className="WordApi">
        <h2>{props.result.word}</h2>
        <h3>{props.result.phonetic}</h3>
        {props.result.meanings.map(function (data, index) {
          return (
            <div key={index}>
              <Definitions meaning={data} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return "loading";
  }
}
