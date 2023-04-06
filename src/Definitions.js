import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
export default function Definitions(props) {
  return (
    <div className="Definitions">
      <br />
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <Example ex={props.meaning} />
      <br />

      <Synonyms syn={props.meaning} />
    </div>
  );
}
