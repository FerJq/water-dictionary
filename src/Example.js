import React from "react";

export default function Example(props) {
  if (props.ex) {
    return (
      <strong>
        <i>Example: {props.ex.example}</i>
      </strong>
    );
  }
}
