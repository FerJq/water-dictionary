import React from "react";
import Definitions from "./Definitions";

export default function WordApi(props) {
  if (props.result) {
    return (
      <div className="WordApi">
        <div className="Mainword">
          <h2>{props.result.word}</h2>
          <h6>{props.result.phonetic}</h6>
        </div>
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
