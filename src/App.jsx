// React Imports
import React from "react"

//Style Imports
import "./style/Normalization.scss"
import "./style/App.scss"

// Assets Import
import ExampleImage from "./examplepic.jpg"

// Code
const App = function() {
  return (
    <div className="App">
      <h1>Hello, Worssssld</h1>
      <img src={ExampleImage} alt="" srcset="" />
    </div>
  )
}

export default App