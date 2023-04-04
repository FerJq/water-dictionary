import React, { useState } from "react";
import axios from "axios";

export default function WordApi(props) {
  const [description, setDescription] = useState();
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;

  function showDescription(response) {
    console.log(response);
  }
  axios.get(apiUrl).then(showDescription);
  return "";
}
