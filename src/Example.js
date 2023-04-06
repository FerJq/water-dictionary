import React from "react";

export default function Example(props) {
  if (props.ex.example) {
    return (
      <strong>
        <i>Example: {props.ex.example}</i>
      </strong>
    );
  }
}
