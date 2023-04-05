import React from "react";

export default function Use(props) {
  return (
    <div className="Use">
      <div className="Description">
        <h6>Speech: {props.elements.PartOfSpeech}</h6>
        {props.elements.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <strong>{definition.example}</strong>
              </p>
            </div>
          );
        })}
        <p>Meaning: {props.elements.definitions[0].definition}</p>
        <p>Example: {props.elements.definitions[0].example}</p>
      </div>
    </div>
  );
}
