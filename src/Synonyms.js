import React from "react";

export default function Synonyms(props) {
  if (props.syn.synonyms) {
    return (
      <small>
        <i>
          Synonyms:{" "}
          {props.syn.synonyms.map(function (syn, index) {
            return <i key={index}>{syn} </i>;
          })}
        </i>
      </small>
    );
  }
}
