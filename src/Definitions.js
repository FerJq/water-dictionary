import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Definitions.css";

export default function Definitions(props) {
  return (
    <div className="Definitions-container">
      <div className="Definitions">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>{props.meaning.definition}</p>

        <Example ex={props.meaning} />
        <br />
        <Synonyms syn={props.meaning} />
      </div>
    </div>
  );
}
