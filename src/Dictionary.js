import React, { useState } from "react";
import Switch from "react-switch";
import axios from "axios";
import WordApi from "./WordApi";
import ExampleWords from "./ExampleWords";
import Hrefwebsite from "./Hrefwebsite";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [description, setDescription] = useState(null);
  const [word, setWord] = useState("bread");
  const [prepare, setPrepare] = useState(false);

  function showDescription(response) {
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
    //https://www.shecodes.io/learn/apis/dictionary
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
          <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            data-bs-theme={props.mode}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Fjs.
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                  <a
                    className="nav-link"
                    href="https://github.com/FerJq/water-dictionary"
                  >
                    Source Code
                  </a>
                  <a
                    className="nav-link"
                    href="https://sage-blini-d7544b.netlify.app"
                  >
                    World of books
                  </a>
                </div>
                <span>
                  <Switch
                    onChange={props.changetheme}
                    checked={props.mode === "dark"}
                  />
                </span>
              </div>
            </div>
          </nav>
          <div className="forms">
            <form onSubmit={submitSearch}>
              <input
                type="Search"
                className="form-control p-2 rounded-0"
                onChange={saveInput}
                placeholder="Look for you word here!"
              />
            </form>
          </div>
          <div className="WordsContainer">
            <div className="WordApi">
              <WordApi result={description} />
            </div>

            <div className="ExampleWords">
              <ExampleWords />
            </div>
          </div>

          <Hrefwebsite />
        </div>
        <footer>
          <div>
            Dictionary coded with love by{" "}
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/fernanda-santiago-b93b07265/"
              target="_blank"
            >
              Fernanda Santiago
            </a>
          </div>
        </footer>
      </div>
    );
  } else {
    dataReady();
    return "Loading";
  }
}
