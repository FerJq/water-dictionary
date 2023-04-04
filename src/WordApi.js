import React, { useState } from "react";
import axios from "axios";
import "./WordApi.css";

export default function WordApi(props) {
  let [description, setDescription] = useState();
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;

  function showDescription(response) {
    setDescription(response.data[0]);
  }
  console.log(props.word);
  axios.get(apiUrl).then(showDescription);

  return (
    <div className="WordApi">
      <div className="Container">
        <h2>{props.word}</h2>
        <p>{console.log(description)}</p>
      </div>
    </div>
  );
}
