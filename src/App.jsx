// React Imports
import React from "react";

// Components import
import MyInfo from "./components/MyInfo";
import AboutMe from "./components/AboutMe"

//Style Imports
import "./style/Normalization.scss";
import "./style/App.scss";

// Code
const App = function() {
  return (
    <div className="App">
      <MyInfo />
      <AboutMe />
    </div>
  )
}

export default App;