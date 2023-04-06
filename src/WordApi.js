import React from "react";
import Definitions from "./Definitions";
import "./WordApi.css";

export default function WordApi(props) {
  if (props.result) {
    return (
      <div className="WordApi">
        <div className="Mainword">
          <h2>{props.result.word}</h2>
          <h6>{props.result.phonetic}</h6>
        </div>
        <div className="Meanings">
          {props.result.meanings.map(function (data, index) {
            return (
              <div key={index}>
                <Definitions meaning={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return "loading";
  }
}
