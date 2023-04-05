import React from "react";
export default function Definitions(props) {
  return (
    <div className="Definitions">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (description, index) {
        return (
          <div key={index}>
            <main>
              {description.definition}{" "}
              <i>
                <strong>{description.example}</strong>
              </i>
            </main>
          </div>
        );
      })}
    </div>
  );
}
