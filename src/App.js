import React, { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  console.log(theme);

  return (
    <div className="App" id={theme}>
      <header className="App-header">
        <Dictionary changetheme={changeTheme} mode={theme} />
      </header>
    </div>
  );
}

export default App;
