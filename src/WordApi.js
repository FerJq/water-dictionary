import React from "react";
import Definitions from "./Definitions";
import Pictures from "./Pictures";
import { ColorRing } from "react-loader-spinner";
import "./WordApi.css";
import ExampleWords from "./ExampleWords";

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
          <div className="ExampleWords">
            <ExampleWords />
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
      ["#feceff", "#fffad6", "#ffcece", "#abbd81", "#849b87"],
      ["#ffa35e", "#ff2882", "#f78a8a", "#8a5599", "#ba0b54"],
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
