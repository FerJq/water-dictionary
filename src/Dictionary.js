import React, { useState } from "react";
import WordApi from "./WordApi";
import "./Dictionary";

export default function Dictionary() {
  const [word, setWord] = useState("water");
  function saveData(event) {
    event.preventDefault();
  }
  function saveInput(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="Dicionary-container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
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
          <form onSubmit={saveData}>
            <input
              width="400"
              type="Search"
              className="form-control"
              onChange={saveInput}
            />
            <input type="submit" className="btn btn-info" />
          </form>
        </div>
        <WordApi word={word} />
      </div>
    </div>
  );
}
