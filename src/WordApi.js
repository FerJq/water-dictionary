import React from "react";
import Definitions from "./Definitions";
import Pictures from "./Pictures";
import { ColorRing } from "react-loader-spinner";
import "./WordApi.css";

export default function WordApi(props) {
  if (props.result) {
    return (
      <div className="WordApi">
        <div className="MainWord-Container">
          <div className="Mainword">
            <h2>{props.result.word}</h2>
            <hr />
            <h6>{props.result.phonetic}</h6>
          </div>
        </div>
        <br />
        <Pictures pictures={props.pictures} />
        <div className="Meanings-container">
          <div className="Meanings">
            {props.result.meanings.map(function (data, index) {
              return (
                <div key={index}>
                  <hr />
                  <Definitions meaning={data} />
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let arraynumber = 0;
    if (props.mode === "dark") {
      arraynumber = 1;
    } else {
      arraynumber = 0;
    }
    let colorArray = [
      ["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"],
      ["#d66d6d", "#aa73bc", "#cc5bb7", "#00d1ca", "#9400ff"],
    ];
    return (
      <div className="Loader">
        <ColorRing
          visible={true}
          height="250"
          width="350"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={colorArray[arraynumber]}
        />
      </div>
    );
  }
}
