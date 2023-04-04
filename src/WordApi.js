import React, { useState } from "react";
import axios from "axios";
import "./WordApi.css";

export default function WordApi(props) {
  let [description, setDescription] = useState();
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;

  function showDescription(response) {
    console.log(response);
    setDescription({
      word: props.word,
      definition: response.data[0].meaning[0].definition[0].definition,
    });
  }
  axios.get(apiUrl).then(showDescription);
  description = "hi";
  return (
    <div className="WordApi">
      <div className="Container">
        <h2>{props.word}</h2>
        <p>{description.definition}</p>
      </div>
    </div>
  );
}
