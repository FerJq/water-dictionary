import React, { useState } from "react";
import "./Dictionary";
import axios from "axios";
import WordApi from "./WordApi";
import ExampleWords from "./ExampleWords";

export default function Dictionary(props) {
  const [description, setDescription] = useState(null);
  const [word, setWord] = useState("bread");
  const [prepare, setPrepare] = useState(false);

  function showDescription(response) {
    console.log(response.data);
    setDescription(response.data);
  }

  function submitSearch(event) {
    event.preventDefault();
    loadData();
  }

  function saveInput(event) {
    setWord(event.target.value);
  }

  function loadData() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=24fd0ba27a25dt7o304a40659333f2df`;
    axios.get(apiUrl).then(showDescription);
  }

  function dataReady() {
    setPrepare(true);
    loadData();
  }

  if (prepare === true) {
    return (
      <div className="Dictionary">
        <div className="Dicionary-container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Navbar
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                  <a class="nav-link" href="/">
                    Features
                  </a>
                  <a class="nav-link" href="/">
                    Pricing
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="forms">
            <form onSubmit={submitSearch}>
              <input
                width="400"
                type="Search"
                className="form-control"
                onChange={saveInput}
              />
              <input type="submit" className="btn btn-info" />
            </form>
          </div>
          <div className="WordApi">
            <WordApi result={description} />
          </div>
          <div className="ExampleWords">
            <ExampleWords />
          </div>
        </div>
      </div>
    );
  } else {
    dataReady();
    return "Loading";
  }
}
