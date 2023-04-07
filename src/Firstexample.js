import React, { useState } from "react";
import axios from "axios";
import "./Firstexample.css";

export default function Secondexample(props) {
  const max = 100;
  let randomNumber = Math.floor(Math.random() * max);
  const randomWord = props.variant[randomNumber];
  const [data, setData] = useState(null);

  function showWord(response) {
    setData(response.data);
  }
  function apiData() {
    //https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${randomWord}&key=24fd0ba27a25dt7o304a40659333f2df`;
    axios.get(apiUrl).then(showWord);
  }

  function loadData() {
    apiData();
  }

  if (data) {
    return (
      <div className="FirstExample">
        <h3>{data.word}</h3>
        <h6>{data.phonetic}</h6>
        <p>{data.meanings[0].definition}</p>
      </div>
    );
  } else {
    loadData();
  }
}
