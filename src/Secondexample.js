import React, { useState } from "react";
import axios from "axios";

export default function Secondexample(props) {
  const max = 107551;
  let randomNumber = Math.floor(Math.random() * max);
  const randomWord = props.variant[randomNumber];
  const [data, setData] = useState(null);

  function showWord(response) {
    console.log(response.data);
    setData(response.data);
  }
  function apiData() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${randomWord}&key=24fd0ba27a25dt7o304a40659333f2df`;
    axios.get(apiUrl).then(showWord);
  }

  function loadData() {
    apiData();
  }

  if (data) {
    return (
      <div className="SecondExample">
        <h3>{data.word}</h3>
        <p>{data.meanings[0].definition}</p>
      </div>
    );
  } else {
    loadData();
  };
}
