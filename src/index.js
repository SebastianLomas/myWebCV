// React Imports
import React from "react"
import { createRoot } from "react-dom/client"

// Components Imports
import App from "./App"

// Assets Imports
import Example from "./examplepic.jpg"

// Code
const root = createRoot(document.querySelector("#root"))
root.render(<App></App>)